import { useState, useRef } from "react";
import "./../assets/css/Home.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useLanguageContext } from "../context/LanguageContext";

//IMAGES
import wct from "./../assets/img/projects/worldCupTracker.png";
import booketMarket from "./../assets/img/projects/booketMarket.png";
import calculator from "./../assets/img/projects/calculatorOdinProject.png";

//COMPONENTS
import ProjectCard from "../components/ProjectCard";
import ListPill from "../components/ListPill";

const Home = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "Sass",
    "PostgreSQL",
    "Mongo DB",
    "React",
    "Node.JS",
    "Express",
    "Sequelize",
    "Wordpress",
  ];

  const { language } = useLanguageContext();

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <div>
          <h1>{language[language.mode].header.title}</h1>
          <p>{language[language.mode].header.subtitle}</p>
          <p>{language[language.mode].header.body}</p>
          <div className="header-links">
            <a
              className="btn"
              onClick={() => {
                scrollTo(aboutRef);
              }}
              aria-label="Travel to about section"
            >
              {language[language.mode].header.button}
            </a>
            {/* <AiFillGithub className="link-icon" />
            <AiFillLinkedin className="link-icon" /> */}
          </div>
        </div>
        <div></div>
      </header>

      <main>
        <section ref={aboutRef} className="about" aria-label="about" id="about">
          <div className="about-deco"></div>
          <div>
            <h2>{language[language.mode].about.title}</h2>

            <p>{language[language.mode].about.paragraph1}</p>
            <p>{language[language.mode].about.paragraph2}</p>

            <h2>{language[language.mode].skills.title}</h2>
            <ul className="skill-pills">
              {skills.map((skill) => (
                <ListPill key={skill} content={skill} />
              ))}
            </ul>
          </div>
        </section>

        <section ref={projectsRef} className="projects" id="projects">
          <h2>{language[language.mode].projects.title}</h2>

          <div className="projects-grid">
            <ProjectCard
              cardTitle={language[language.mode].projects.list[0].title}
              description={language[language.mode].projects.list[0].description}
              image={booketMarket}
              preview="https://booketmarket.netlify.app/"
              githubCode="https://github.com/24FContreras/DL_booket"
              buttonsText={language[language.mode].projects.list[0].buttons}
            />

            <ProjectCard
              cardTitle={language[language.mode].projects.list[1].title}
              description={language[language.mode].projects.list[1].description}
              image={wct}
              position="center"
              preview="https://worldcuptracker.netlify.app/"
              githubCode="https://github.com/24FContreras/React1-WorldCupTracker"
              buttonsText={language[language.mode].projects.list[1].buttons}
            />

            <ProjectCard
              cardTitle={language[language.mode].projects.list[2].title}
              description={language[language.mode].projects.list[2].description}
              image={calculator}
              position="center"
              preview="https://24fcontreras.github.io/TOP-Calculator/"
              githubCode="https://github.com/24FContreras/TOP-Calculator"
              buttonsText={language[language.mode].projects.list[2].buttons}
            />
          </div>
        </section>
      </main>

      <footer style={{ background: "black" }}>
        <h4>Get in contact</h4>
        <p>24.f.contreras@gmail.com</p>
        <p>24FContreras</p>
      </footer>
    </>
  );
};

export default Home;
