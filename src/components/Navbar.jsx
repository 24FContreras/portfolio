import "../assets/css/Navbar.css";
import { useState } from "react";
import { useLanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const links = [
    { name: "home", href: "#" },
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects" },
  ];

  const { language, setLanguage } = useLanguageContext();

  console.log(language.mode);

  const handleLanguage = () => {
    if (language.mode === "english") {
      setLanguage({ ...language, mode: "spanish" });
    } else setLanguage({ ...language, mode: "english" });
  };

  return (
    <nav className="navbar">
      <p className="nav-brand">FC</p>
      <ul>
        {links.map((link) => {
          return (
            <li className="navlink" key={link.name}>
              <a href={link.href}>
                {language[language.mode].navbar[link.name]}
              </a>
            </li>
          );
        })}

        <button onClick={handleLanguage} className="language-button">
          {language.mode === "english" ? "Leer en español" : "Read in english"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
