import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  About,
  Youtube,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  let [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("COMPONET MOUNT");
    async function getData() {
      const res = await fetch(
        "https://threed-portfolio-web-api.onrender.com/projects"
      );
      const data = await res.json();

      setProjects(data);
      setLoading(false);
    }
    getData();
  }, []);

  let [youtubeVids, setYoutubeVids] = useState([]);
  const [loadingVids, setLoadingVids] = useState(true);

  useEffect(() => {
    console.log("COMPONET MOUNT");
    async function getData() {
      const res = await fetch(
        "https://threed-portfolio-web-api.onrender.com/youtube"
      );
      const data = await res.json();
      console.log(data);
      setYoutubeVids(data);
      setLoadingVids(false);
    }
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        {loadingVids ? (
          <div>Loading...</div>
        ) : (
          <Youtube youtubeVids={youtubeVids} />
        )}
        <Experience />
        <Tech />
        {loading ? <div>Loading...</div> : <Works projects={projects} />}

        <Feedbacks />
      </div>
      <div className="relative z-0 bg-black">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
