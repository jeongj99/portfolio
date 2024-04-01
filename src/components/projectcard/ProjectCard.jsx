import Card from "./Card";
import CardHeader from "./CardHeader";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardHeader>
        <div className="project-card__image-container">
          <img
            className="project-card__image"
            src={project.image}
            width={247}
            height={250}
            alt="projectImage"
          />
          <div className="project-card__buttons">
            <a
              href={project.link}
              className="project-card__link"
            >
              <i className="uil uil-link-h" />
            </a>
            <a
              href={project.github}
              className="project-card__github"
            >
              <i className="uil uil-github-alt" />
            </a>
          </div>
        </div>
      </CardHeader>
      <div className="project-card__info-container">
        <h4 className="project-card__name">{project.name}</h4>
        <p className="project-card__description">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;