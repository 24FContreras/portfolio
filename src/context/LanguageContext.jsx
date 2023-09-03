import { createContext, useContext, useState } from "react";

import wct from "./../assets/img/projects/worldCupTracker.png";
import booketMarket from "./../assets/img/projects/booketMarket.png";
import calculator from "./../assets/img/projects/calculatorOdinProject.png";
import pokeFinder from "./../assets/img/projects/pokeFinder.png";
import sistemaSeguimiento from "./../assets/img/projects/sistemaSeguimiento.png";

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
          preview: "https://booketmarket.netlify.app/",
          githubCode: "https://github.com/24FContreras/DL_booket",
          thumbnail: booketMarket,
        },
        {
          title: "World Cup Tracker",
          description:
            "Tracker for the latest world cup Qatar 2022. Developed with React. Powered by estiens Public API World Cup Json",
          buttons: ["Live preview", "Code"],
          preview: "https://worldcuptracker.netlify.app/",
          githubCode: "https://github.com/24FContreras/React1-WorldCupTracker",
          thumbnail: wct,
        },
        {
          title: "Calculator",
          description:
            "Calculator project made for The Odin Project. Coded with HTML, CSS and vanilla JavaScript",
          buttons: ["Live preview", "Code"],
          preview: "https://24fcontreras.github.io/TOP-Calculator/",
          githubCode: "https://github.com/24FContreras/TOP-Calculator",
          thumbnail: calculator,
        },
        {
          title: "Pokefinder",
          description:
            "Minimalist pokedex project. Coded with Vue JS and the public API PokeAPI",
          buttons: ["Live preview", "Code"],
          preview: "https://vuepokefinder.netlify.app//",
          githubCode: "https://github.com/24FContreras/vue_pokedex",
          thumbnail: pokeFinder,
        },
        {
          title: "Follow-up system",
          description:
            "Desktop app OSPAMFRA SPA. Refence image for security reasons. The app allows emision of budgets, invoice registering and follow-up, as well as maintaining an organized repository of documents. Developed with Electron JS using React as frontend library.",
          buttons: [],
          thumbnail: sistemaSeguimiento,
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
          preview: "https://booketmarket.netlify.app/",
          githubCode: "https://github.com/24FContreras/DL_booket",
          thumbnail: booketMarket,
        },
        {
          title: "World Cup Tracker",
          description:
            "Tracker para la última copa del mundo Qatar 2022. Desarrollado con React. Data obtenida desde la API publica de estiens, World Cup Json",
          buttons: ["Vista en vivo", "Código"],
          preview: "https://worldcuptracker.netlify.app/",
          githubCode: "https://github.com/24FContreras/React1-WorldCupTracker",
          thumbnail: wct,
        },
        {
          title: "Calculadora",
          description:
            "Calculadora desarrollada para The Odin Project. Construído con HTML, CSS y vanilla JavaScript",
          buttons: ["Vista en vivo", "Código"],
          preview: "https://24fcontreras.github.io/TOP-Calculator/",
          githubCode: "https://github.com/24FContreras/TOP-Calculator",
          thumbnail: calculator,
        },
        {
          title: "Pokefinder",
          description:
            "Proyecto de Pokedex minimalista. Construído con Vue JS y la API pública PokeAPI",
          buttons: ["Live preview", "Code"],
          preview: "https://vuepokefinder.netlify.app//",
          githubCode: "https://github.com/24FContreras/vue_pokedex",
          thumbnail: pokeFinder,
        },
        {
          title: "Sistema de seguimiento",
          description:
            "Aplicación de escritorio para OSPAMFRA SPA. Imagen referencial por motivos de seguridad. La aplicación permite emitir presupuestos, registrar facturas y realizar un seguimientos de estos, como también subir los documentos a un repositorio organizado. Desarrollada con Electron JS utilizando React como biblioteca frontend.",
          buttons: [],

          thumbnail: sistemaSeguimiento,
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
