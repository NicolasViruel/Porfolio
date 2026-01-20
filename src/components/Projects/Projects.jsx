import { useRef } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";
import Slider from "react-slick";

const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="projects-container" id="proyectos">
      <h5>Mis Proyectos</h5>

      <div className="projects-content">
        <div className="arrow-right" onClick={slideRight}>
          <span> &gt; </span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span> &lt; </span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;

