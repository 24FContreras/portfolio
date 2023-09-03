import { useRef } from "react";
import { Link } from "react-router-dom";
import "./../assets/css/Home.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

import { useLanguageContext } from "../context/LanguageContext";

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
    "React",
    "Material UI",
    "Mantine",
    "Node.JS",
    "Express",
    "Sequelize",
    "Wordpress",
    "Vue JS",
    "Docker",
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

            <Link
              target="blank"
              rel="noopener noreferrer"
              to={language[language.mode].header.cv.link}
              className="btn"
            >
              {language[language.mode].header.cv.text}
            </Link>
          </div>
        </div>
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
            {language[language.mode].projects.list.map((item) => (
              <ProjectCard
                key={item.title}
                cardTitle={item.title}
                description={item.description}
                image={item.thumbnail}
                preview={item.preview}
                githubCode={item.githubCode}
                buttonsText={item.buttons}
              />
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2 className="contact-title">
            {language[language.mode].contact.title}
          </h2>
          <p>{language[language.mode].contact.body}</p>

          <a
            className="email-link"
            href="mailto:24.f.contreras@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            {language[language.mode].contact.button}
          </a>
        </section>
      </main>

      <footer>
        <h3>FC</h3>
        <p>{language[language.mode].footer.description}</p>

        <div className="social-buttons">
          <a
            href="mailto:24.f.contreras@gmail.com"
            className="social-button"
            aria-label="Send email to Franco Contreras"
          >
            <BiLogoGmail aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/24fcontreras"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="Visit my linkedIn profile"
          >
            <AiFillLinkedin aria-hidden="true" />
          </a>
          <a
            href="https://github.com/24FContreras"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="Visit my github profile"
          >
            <AiFillGithub aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
