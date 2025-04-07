import { useTranslation } from "react-i18next";
import Translate from "./translate";
import LoadAnimation from "./load-animation";
import { useState } from "react";
import { Github } from "lucide-react";
import { NavbarItems } from "../types";

const navbarItems: NavbarItems[] = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact-me" },
];

export default function Navbar() {
  return (
    <LoadAnimation delay={0.2}>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex text-[var(--color-shadows)]">
        <GithubLink position="top" />
        <ul className="flex gap-7 justify-center mx-auto fixed z-10 top-0 left-1/2 transform -translate-x-1/2 p-3 mt-5 border-glass rounded-xl backdrop-blur-md">
          {navbarItems.map((item) => (
            <NavbarElement key={item.label} {...item} />
          ))}
        </ul>
        <LanguageSwitcher position="top" />
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden text-[var(--color-shadows)]">
        <GithubLink position="bottom" />
        <LanguageSwitcher position="bottom" />
      </nav>
    </LoadAnimation>
  );
}

function GithubLink({ position }: { position: "top" | "bottom" }) {
  const posClasses = position === "top" ? "top-0 mt-5" : "bottom-0 mb-5";

  return (
    <a
      href="https://github.com/Edoo29"
      target="_blank"
      rel="noreferrer"
      title="My GitHub profile link"
      className={`flex gap-5 fixed left-0 ${posClasses} ml-5 p-3 border-glass rounded-xl backdrop-blur-md z-10 glowing-effect cursor-pointer`}
    >
      <Github />
    </a>
  );
}

export function LanguageSwitcher({ position }: { position: "top" | "bottom" }) {
  const [currentLang, setLang] = useState<"en" | "it">("en");
  const { i18n } = useTranslation();

  const isTop = position === "top";
  const posClasses = isTop ? "top-0 mt-5" : "bottom-0 mb-5";

  const changeLang = (lang: "en" | "it") => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  return (
    <div
      className={`flex gap-5 fixed right-0 ${posClasses} mr-5 p-3 border-glass rounded-xl backdrop-blur-md z-10`}
    >
      {["en", "it"].map((lang) => (
        <Toggle
          key={lang}
          active={currentLang === lang}
          onClick={() => changeLang(lang as "en" | "it")}
          language={lang}
        />
      ))}
    </div>
  );
}

function Toggle({
  language,
  active,
  onClick,
}: {
  language: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? "text-white underline" : "text-[var(--color-shadows)]"
      } cursor-pointer hover:underline transition-all`}
      aria-pressed={active}
    >
      <Translate text={language === "en" ? "English" : "Italian"} />
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
