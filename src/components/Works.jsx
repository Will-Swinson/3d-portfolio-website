import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { githubImg } from "../assets";
import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  project_name,
  project_description,
  tag_ids,
  project_img_url,
  git_hub,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-3-xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={project_img_url}
          alt={project_name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(git_hub, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={githubImg}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{project_name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{project_description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tag_ids.map((tag) => {
          return (
            <p key={tag.tag_name} className={`text-[14px] ${tag.tag_color} `}>
              #{tag.tag_name}
            </p>
          );
        })}
      </div>
    </Tilt>
  </motion.div>
);

const Works = ({ projects }) => {
  // if (!projects || projects.length === 0) {
  //   return <div> Loading... </div>;
  // }
  console.log(projects);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My JavaScript full-stack projects demonstrate my proficiency in
          building scalable web applications using various tools and
          technologies. I leverage front-end and back-end development knowledge
          to create responsive, dynamic user interfaces with RESTful APIs,
          databases, and authentication. Using React, Express, and Node.js, I
          build modern, interactive web apps that prioritize the end-user
          experience. My goal is to deliver high-quality solutions that meet
          user needs and offer a seamless experience.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
