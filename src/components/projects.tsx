import { CardProps } from "../types";
import Arrow from "./arrow";
import LoadAnimation from "./load-animation";
import Translate from "./translate";
import { Link } from "react-router-dom";

const cards: CardProps[] = [
  {
    link: "/expense-tracker",
    title: "Expense tracker",
    description: <Translate text="expenseTrackerDescription" />,
    imagePath: "./blue.png",
  },
  {
    link: "/boilerflow",
    title: "Boilerflow",
    description: <Translate text="boilerflowDescription" />,
    imagePath: "./boilerflow.png",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="mt-20 md:mt-0 flex flex-col justify-center text-center items-center gap-3 p-3 h-screen"
    >
      <LoadAnimation>
        <ProjectsTitle />
      </LoadAnimation>
      <LoadAnimation delay={0.2}>
        <ProjectsList />
      </LoadAnimation>
      <LoadAnimation delay={0.4}>
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

function ProjectsList() {
  return (
    <div className="mt-5 grid grid-grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {cards.map(({ title, link, description, imagePath }) => (
        <Card
          key={title}
          link={link}
          title={title}
          description={description}
          imagePath={imagePath}
        />
      ))}
    </div>
  );
}

function Card({ link, title, description, imagePath }: CardProps) {
  return (
    <Link
      to={link}
      className="max-w-sm flex flex-col border-glass rounded-xl shadow-md backdrop-blur-md glowing-effect cursor-pointer"
    >
      <img src={imagePath} className="rounded-t-xl" />
      <div className="p-3">
        <h3 className="text-white text-3xl font-bold">{title}</h3>
        <p className="text-[var(--color-shadows)]">{description}</p>
        <button className="mt-5 w-full rounded-xl bg-[var(--purple)] py-2 text-white cursor-pointer hover:bg-[var(--dark-purple)]">
          <Translate text="readMore" />
        </button>
      </div>
    </Link>
  );
}

function GetInTouch() {
  return (
    <Arrow direction="down" reference="#contact-me" customClass="mt-24">
      <Translate text="getInTouch" />
    </Arrow>
  );
}
