import postgres from "postgres";
import express from "express";

const sql = postgres(process.env.DATABASE_URL);

const port = 5172;

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const data = await sql.query`SELECT * FROM projects`;
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

app.get("/test", async (req, res) => {
  res.send("HI");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port} `);
});
