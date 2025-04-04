import "./toggle-button.css";
import { useTranslation } from "react-i18next";
import Translate from "./translate";

type NavbarItems = {
  label: string;
  href: string;
};

function Navbar() {
  const { t, i18n } = useTranslation();

  const handleTranslation = (code: string) => {
    i18n.changeLanguage(code);
  };

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
      href: "#contact",
    },
  ];

  return (
    <>
      <nav className="hidden md:flex text-[var(--color-shadows)]">
        <ul className="flex gap-7 justify-center mx-auto fixed z-10 top-0 left-1/2 transform -translate-x-1/2 p-3 mt-5 border-glass rounded-xl backdrop-blur-md">
          {navbarItems.map((item) => (
            <NavbarElement key={item.label} {...item} />
          ))}
        </ul>
        <div className="flex gap-5 absolute right-0 top-0 mt-5 mr-5 p-3 border-glass rounded-xl backdrop-blur-md">
          <button
            onClick={() => handleTranslation("en")}
            className="cursor-pointer hover:underline"
          >
            <Translate text="english" />
          </button>
          <button
            onClick={() => handleTranslation("it")}
            className="cursor-pointer hover:underline"
          >
            <Translate text="italian" />
          </button>
        </div>
      </nav>
    </>
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

export default Navbar;
