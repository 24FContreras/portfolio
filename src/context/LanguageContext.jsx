import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

const languageOptions = {
  mode: "english",
  english: {
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    header: {
      title: "Hi! I'm Franco Contreras",
      subtitle: "Web Developer from Santiago de Chile",
      body: `I'm a passionate full-stack javascript developer oriented to make great, useful websites for the community. My current project is designing and developing a website for children's music band "Acuarela".`,
      button: "Let's go!",
      cv: {
        text: "Resume",
        link: "/resume/en",
      },
    },
    about: {
      title: "About me",
      paragraph1:
        "I started my journey as a self-learner, but then I decided to take another step and get formal studies in web development. For the last two years I've been developing projects in vanilla JS, React and Wordpress.",
      paragraph2:
        "My objective is to build useful and accessible websites, writing clean code with focus on the future.",
    },
    skills: {
      title: "Tech Stack",
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "Booket Market",
          description:
            "E-commerce inspired project developed using PERN Stack (PostgreSQL, Express, React and Node JS)",
          buttons: ["Live preview", "Code"],
        },
        {
          title: "World Cup Tracker",
          description:
            "Tracker for the latest world cup Qatar 2022. Developed with React. Powered by estiens Public API World Cup Json",
          buttons: ["Live preview", "Code"],
        },
        {
          title: "Calculator",
          description:
            "Calculator project made for The Odin Project. Coded with HTML, CSS and vanilla JavaScript",
          buttons: ["Live preview", "Code"],
        },
      ],
    },
    contact: {
      title: "Get in touch",
      body: "If you have a project or just want to ask questions, please email me to 24.f.contreras@gmail.com. I'll respond as soon as possible!",
      button: "Let's talk",
    },
    footer: {
      description:
        "Designed and coded by Franco Contreras. Built in React and deployed with Netlify.",
    },
  },
  spanish: {
    navbar: {
      home: "Inicio",
      about: "Sobre mi",
      projects: "Proyectos",
      contact: "Contacto",
    },
    header: {
      title: "¡Hola! Soy Franco Contreras",
      subtitle: "Desarrollador Web de Santiago de Chile",
      body: `Soy un desarrollador web apasionado, orientado a construir sitios útiles para la comunidad. Mi proyecto actual es diseñar y desarrollar un sitio web renovado para la banda de música infantil "Acuarela".`,
      button: "¡Vamos!",
      cv: {
        text: "CV",
        link: "/resume/es",
      },
    },
    about: {
      title: "Sobre mi",
      paragraph1:
        "Inicié este camino de manera autodidacta, pero prontamente decidí tomar otro paso y obtener estudios formales en el área del desarrollo web. Durante los últimos dos años he estado desarrollando proyectos en vanilla js, React y Worpress.",
      paragraph2:
        "Mi objetivo es desarrollar sitios web que sean útiles y accessibles, escribiendo código limpio con mirada hacia el futuro",
    },
    skills: {
      title: "Stack tecnológico",
    },
    projects: {
      title: "Proyectos",
      list: [
        {
          title: "Booket Market",
          description:
            "Proyecto con temática E-Commerce desarrollo mediante el stack PERN (PostgreSQL, Express, React and Node JS)",
          buttons: ["Vista en vivo", "Código"],
        },
        {
          title: "World Cup Tracker",
          description:
            "Tracker para la última copa del mundo Qatar 2022. Desarrollado con React. Data obtenida desde la API publica de estiens, World Cup Json",
          buttons: ["Vista en vivo", "Código"],
        },
        {
          title: "Calculadora",
          description:
            "Calculadora desarrollada para The Odin Project. Construído con HTML, CSS y vanilla JavaScript",
          buttons: ["Vista en vivo", "Código"],
        },
      ],
    },
    contact: {
      title: "Contáctame",
      body: "Si tienes alguna idea o proyecto, o solamente quieres consultar algo, por favor envíame un correo a la dirección 24.f.contreras@gmail.com. ¡Responderé tan pronto como sea posible!",
      button: "Conversemos",
    },
    footer: {
      description:
        "Diseñado y programado por Franco Contreras. Construído en React y desplegado con Netlify.",
    },
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(languageOptions);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const useLanguageContext = () => useContext(LanguageContext);
