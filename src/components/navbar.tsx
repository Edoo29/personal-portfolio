import { useTranslation } from "react-i18next";
import Translate from "./translate";
import LoadAnimation from "./load-animation";
import { useState } from "react";
import { Github } from "lucide-react";
import { NavbarItems, ToggleProps } from "../types";

const navbarItems: NavbarItems[] = [
  {
    label: "home",
    href: "#home",
  },

  {
    label: "about",
    href: "#about",
  },

  {
    label: "projects",
    href: "#projects",
  },

  {
    label: "contact",
    href: "#contact-me",
  },
];

export default function Navbar() {
  return (
    <>
      <LoadAnimation delay={0.2}>
        <nav className="hidden md:flex text-[var(--color-shadows)]">
          <a
            href="https://github.com/Edoo29"
            target="_blank"
            rel="noreferrer"
            title="My GitHub profile link"
            className="flex gap-5 fixed left-0 top-0 mt-5 ml-5 p-3 border-glass rounded-xl backdrop-blur-md z-10 glowing-effect cursor-pointer"
          >
            <Github />
          </a>
          <ul className="flex gap-7 justify-center mx-auto fixed z-10 top-0 left-1/2 transform -translate-x-1/2 p-3 mt-5 border-glass rounded-xl backdrop-blur-md">
            {navbarItems.map((item) => (
              <NavbarElement key={item.label} {...item} />
            ))}
          </ul>
          <TranslateLanguageButton />
        </nav>
        <nav className="flex md:hidden text-[var(--color-shadows)]">
          <a
            href="https://github.com/Edoo29"
            target="_blank"
            rel="noreferrer"
            title="My GitHub profile link"
            className="flex gap-5 fixed left-0 bottom-0 mb-5 ml-5 p-3 border-glass rounded-xl backdrop-blur-md z-10 glowing-effect cursor-pointer"
          >
            <Github />
          </a>
          <TranslateLanguageButtonMobile />
        </nav>
      </LoadAnimation>
    </>
  );
}

export function TranslateLanguageButton() {
  const [english, setEnglish] = useState<boolean>(true);
  const [italian, setItalian] = useState<boolean>(false);

  return (
    <div className="flex gap-5 fixed right-0 top-0 mt-5 mr-5 p-3 border-glass rounded-xl backdrop-blur-md z-10">
      <Toggle
        customOnClick={() => {
          setItalian(!italian);
          setEnglish(!english);
        }}
        customClass={english ? "text-white" : ""}
        language="English"
      />
      <Toggle
        customOnClick={() => {
          setEnglish(!english);
          setItalian(!italian);
        }}
        customClass={italian ? "text-white" : ""}
        language="Italian"
      />
    </div>
  );
}

export function TranslateLanguageButtonMobile() {
  const [english, setEnglish] = useState<boolean>(true);
  const [italian, setItalian] = useState<boolean>(false);

  return (
    <div className="flex gap-5 fixed right-0 bottom-0 mb-5 mr-5 p-3 border-glass rounded-xl backdrop-blur-md z-10">
      <Toggle
        customOnClick={() => {
          setItalian(!italian);
          setEnglish(!english);
        }}
        customClass={english ? "text-white" : ""}
        language="English"
      />
      <Toggle
        customOnClick={() => {
          setEnglish(!english);
          setItalian(!italian);
        }}
        customClass={italian ? "text-white" : ""}
        language="Italian"
      />
    </div>
  );
}

function Toggle({ language, customClass, customOnClick }: ToggleProps) {
  const { i18n } = useTranslation();

  const handleTranslation = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <button
      onClick={() => {
        customOnClick();
        handleTranslation(language.slice(0, 2).toLocaleLowerCase());
      }}
      className={`${customClass} text-[var(--color-shadows)] cursor-pointer hover:underline`}
    >
      <Translate text={language} />
    </button>
  );
}

function NavbarElement({ label, href }: NavbarItems) {
  return (
    <li className="hover:text-white transition-all">
      <a href={href}>
        <Translate text={label} />
      </a>
    </li>
  );
}
