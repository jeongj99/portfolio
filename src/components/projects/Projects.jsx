import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects section">
      <div className="projects__container">
        <h2 className="section__title">
          Latest Projects
        </h2>
        <p className="section__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link className="button button-flex" to="/portfolio">
          All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;