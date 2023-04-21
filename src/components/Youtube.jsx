import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { youtubeLogo } from "../assets";
import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const YoutubeCard = ({
  index,
  video_name,
  video_url,
  video_img_url,
  youtube_url,
  hash_ids,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-3-xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={video_img_url}
            alt={video_name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(video_url, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={youtubeLogo}
                alt="youtube"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{video_name}</h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {hash_ids.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color} `}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Youtube = ({ youtubeVids }) => {
  // if (!projects || projects.length === 0) {
  //   return <div> Loading... </div>;
  // }
  console.log(youtubeVids);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Just the start...</p>
        <h2 className={styles.sectionHeadText}>Youtube.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As a content creator on YouTube, my channel is dedicated to helping
          beginners learn JavaScript and software engineering concepts. My goal
          is to provide clear and concise explanations of these topics, making
          them more accessible to those who are just starting to learn. Through
          my videos, I cover a variety of subjects related to JavaScript and
          software engineering, including data structures, algorithms,
          programming paradigms, and web development frameworks. I am passionate
          about creating content that is beginner-friendly and aimed at growing
          the community of aspiring software engineers and developers.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {youtubeVids.map((project, index) => (
          <YoutubeCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Youtube, "youtube");
