import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  About,
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
      const res = await fetch("http://localhost:5172/test");
      const data = await res.json();
      console.log(data);
      setProjects(data);
      setLoading(false);
      console.log(projects);
      console.log("I RAN!!!");
      // .then((data) => setProjects((projects = data)))
      // .then(() => console.log(projects));
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
