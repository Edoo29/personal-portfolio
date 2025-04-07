import LoadAnimation from "./load-animation";
import Arrow from "./arrow";
import Translate from "./translate";
import { Image, TechnologyItemProps } from "../types";

const technologies: Image[] = [
  {
    src: "/tailwind.png",
    alt: "Tailwind logo",
    href: "https://tailwindcss.com/",
  },
  {
    src: "/ts.png",
    alt: "TypeScript logo",
    href: "https://www.typescriptlang.org/",
  },
  { src: "/react.png", alt: "React logo", href: "https://react.dev/" },
  { src: "/git.png", alt: "Git logo", href: "https://git-scm.com/" },
  {
    src: "/vscode.png",
    alt: "VSCode logo",
    href: "https://code.visualstudio.com/",
  },
  { src: "/neovim.png", alt: "Neovim logo", href: "https://neovim.io/" },
];

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col h-screen justify-center text-center items-center gap-3 p-3"
    >
      <LoadAnimation delay={0.2}>
        <h2 className="text-4xl text-white">
          <Translate text="aboutMe" />
        </h2>
      </LoadAnimation>

      <LoadAnimation delay={0.4}>
        <AboutMeDescription />
      </LoadAnimation>

      <TechnologyGrid items={technologies} />

      <LoadAnimation delay={0.6}>
        <Arrow direction="down" customClass="mt-24" reference="#projects">
          <Translate text="arrowTwo" />
        </Arrow>
      </LoadAnimation>
    </section>
  );
}

function AboutMeDescription() {
  return (
    <div className="flex flex-col gap-1 text-[var(--color-shadows)] text-lg md:text-xl">
      <span>
        <Translate text="aboutMeOne" />
      </span>

      <span>
        <Translate text="aboutMeTwo" />
        <span className="text-[var(--purple)]">
          <Translate text="aboutMeThree" />
        </span>
        <Translate text="aboutMeFour" />
      </span>

      <span>
        <Translate text="aboutMeFive" />
        <span className="text-[var(--purple)]">
          <Translate text="aboutMeSix" />
        </span>
        <Translate text="aboutMeSeven" />
      </span>
    </div>
  );
}

function TechnologyGrid({ items }: { items: Image[] }) {
  return (
    <div className="grid grid-cols-2 md:flex justify-center gap-5 mt-10">
      {items.map((tech) => (
        <TechnologyItem key={tech.href} {...tech} />
      ))}
    </div>
  );
}

function TechnologyItem({ href, src, alt }: TechnologyItemProps) {
  return (
    <LoadAnimation delay={Math.random() * 0.5}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-5 border-glass rounded-xl shadow-md backdrop-blur-md glowing-effect cursor-pointer flex items-center justify-center"
      >
        <img
          src={src}
          alt={alt}
          width={50}
          height={50}
          className="w-10 h-10"
          loading="lazy"
        />
      </a>
    </LoadAnimation>
  );
}
