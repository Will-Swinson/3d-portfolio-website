DELETE FROM projects, youtube_vids;

DROP TABLE IF EXISTS projects, youtube_vids;


CREATE TABLE projects(
project_id serial NOT NULL,
project_name char(255),
project_img_url  char(255),
git_hub char(255),
project_description char(255),
PRIMARY KEY (project_id)
);

CREATE TABLE youtube_vids(
video_id serial NOT NULL,
video_name char(255),
video_img_url char(255),
video_url  char(255),
youtube_url char(255),
PRIMARY KEY (video_id)
);



