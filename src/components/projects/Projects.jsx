import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "../projectcard/ProjectCard";
import "./projects.css";
import work1 from "../../assets/projectImages/work1.png";
import work2 from "../../assets/projectImages/work2.png";
import work3 from "../../assets/projectImages/work3.png";
import work4 from "../../assets/projectImages/work4.png";

const projectImagesList = [work1, work2, work3, work4];

const projectData = [
  {
    image: projectImagesList[0],
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: projectImagesList[1],
    category: "react js",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: projectImagesList[2],
    category: "next js",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: projectImagesList[3],
    category: "next js",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: projectImagesList[0],
    category: "next js",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: projectImagesList[1],
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: projectImagesList[2],
    category: "fullstack",
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: projectImagesList[3],
    category: "fullstack",
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: projectImagesList[0],
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
];

const Projects = () => {
  return (
    <section className="projects section">
      <div className="projects__container">
        <div className="projects__content">
          <h2 className="section__title">Latest Projects</h2>
          <p className="section__subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link className="button button-flex" to="/portfolio">
            All Projects
          </Link>
        </div>
        <div className="projects__swiper-container">
          <Swiper
            className="swiper"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;