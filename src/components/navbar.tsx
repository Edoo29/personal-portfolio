type NavbarItems = {
  label: string;
  href: string;
};

function Navbar() {
  const navbarItems: NavbarItems[] = [
    {
      label: "Home",
      href: "#home",
    },

    {
      label: "About",
      href: "#about",
    },

    {
      label: "Projects",
      href: "#projects",
    },

    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="hidden md:flex text-[var(--grey)] justify-center mx-auto fixed z-10 top-0 left-1/2 transform -translate-x-1/2 p-3 mt-5 border-glass rounded-xl backdrop-blur-md">
      <ul className="flex gap-7">
        {navbarItems.map((item) => (
          <NavbarElement key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  );
}

function NavbarElement({ label, href }: NavbarItems) {
  return (
    <li className="hover:text-white transition-all">
      <a href={href}>{label}</a>
    </li>
  );
}

export default Navbar;
