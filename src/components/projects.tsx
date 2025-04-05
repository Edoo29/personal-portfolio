import Arrow from "./arrow";
import LoadAnimation from "./load-animation";
import Translate from "./translate";

function Projects() {
  const projects = false;

  return (
    <div
      id="projects"
      className="flex flex-col justify-center text-center items-center gap-3 p-3 h-screen"
    >
      <LoadAnimation animateWhenVisible>
        <ProjectsTitle />
      </LoadAnimation>
      <LoadAnimation animateWhenVisible delay={0.2}>
        {projects ? <ProjectsList /> : <NoProjects />}
      </LoadAnimation>
      <LoadAnimation animateWhenVisible delay={0.4}>
        <GetInTouch />
      </LoadAnimation>
    </div>
  );
}

function ProjectsTitle() {
  return (
    <h2 className="text-4xl text-white">
      <Translate text="projectsTitle" />
    </h2>
  );
}

function NoProjects() {
  return (
    <p className="text-[var(--color-shadows)] text-lg md:text-xl">
      <Translate text="projectsNo" />
    </p>
  );
}

function ProjectsList() {
  return <p className="text-white">This is the projects list</p>;
}

function GetInTouch() {
  return (
    <Arrow direction="down" reference="#projects" customClass="mt-24">
      <Translate text="getInTouch" />
    </Arrow>
  );
}

export default Projects;
