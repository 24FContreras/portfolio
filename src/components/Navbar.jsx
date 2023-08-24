import { useState } from "react";
import { useLanguageContext } from "../context/LanguageContext";
import "../assets/css/Navbar.css";

import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const links = [
    { name: "home", href: "#" },
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  const { language, setLanguage } = useLanguageContext();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLanguage = () => {
    if (language.mode === "english") {
      setLanguage({ ...language, mode: "spanish" });
    } else setLanguage({ ...language, mode: "english" });
  };

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <nav className="new-navbar">
      <div className={openDrawer ? "navbar-bar darkened" : "navbar-bar"}>
        <p className="nav-brand">FC</p>

        <ul className="bar-links">
          {links.map((link) => {
            return (
              <li className="bar-link" key={link.name}>
                <a href={link.href}>
                  {language[language.mode].navbar[link.name]}
                </a>
              </li>
            );
          })}

          <button onClick={handleLanguage} className="language-button">
            {language.mode === "english"
              ? "Leer en español"
              : "Read in english"}
          </button>
        </ul>

        <button
          className={openDrawer ? "burger opened" : "burger"}
          onClick={handleDrawer}
        >
          {openDrawer ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div className={openDrawer ? "drawer" : "drawer closed"}>
        <ul className="link-drawer">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <a href={link.href}>
                  {language[language.mode].navbar[link.name]}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={handleLanguage} className="language-button">
            {language.mode === "english"
              ? "Leer en español"
              : "Read in english"}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
