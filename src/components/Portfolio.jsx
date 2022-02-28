import React from "react";
import ProjectCard from "./ProjectCard";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="sectionEx-container">
      <div className="title-header">
        <div>Visit</div>
        <div>My Profolio</div>
      </div>
      <div className="potfolio-container">
        <ProjectCard
          github="https://github.com/aniketjha1729"
          title="EduHub The Student Network"
          img="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <ProjectCard
          github="https://github.com/aniketjha1729"
          title="Sort My Mess"
          img="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
        />
        <ProjectCard
          github="https://github.com/aniketjha1729"
          title="Redux Buidler"
          img="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        />
        <ProjectCard
          github="https://github.com/aniketjha1729"
          title="Ashiyana The Home"
          img="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        />
        <ProjectCard
          github="https://github.com/aniketjha1729"
          title="Darpan"
          img="https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <ProjectCard
          github="https://github.com/aniketjha1729"
          title="Copy Linker"
          img="https://images.unsplash.com/photo-1555066931-78c471f0d4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
    </div>
  );
};

export default Portfolio;
