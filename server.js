import postgres from "postgres";
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // load environment variables from .env file

const app = express();

// Create a new PostgreSQL client
const sql = postgres("postgres://wswinson:Swinson1!@127.0.0.1:5432/portfolio");

// CORS Fix
app.use(cors());

// Define a route that retrieves data from the database
app.get("/test", async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const data = await sql`
    SELECT
    projects.project_id,
    projects.project_name,
    projects.project_img_url,
    projects.git_hub,
    projects.project_description,
    array_agg(
      json_build_object(
        'tag_name', tags.name,
        'tag_color', tags.color
      )
    ) as tag_ids
  FROM projects
  INNER JOIN project_tags ON projects.project_id = project_tags.project_id
  INNER JOIN tags ON tags.tag_id = project_tags.tag_id
  GROUP BY
    projects.project_id,
    projects.project_name,
    projects.project_img_url,
    projects.git_hub,
    projects.project_description;
`;

    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Start the Express server
app.listen(5172, () => {
  console.log("Server is running on port");
});
