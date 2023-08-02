import { useState, useRef } from "react";
import "./../assets/css/Home.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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

  const learning = ["Next", "Vue", "TypeScript"];

  const aboutRef = useRef(null);

  const scrollTo = (ref) => {
    console.log("click");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <div>
          <h1>Hi! I'm Franco Contreras</h1>
          <p>Web Developer from Santiago de Chile</p>
          <p>
            I'm a passionate full-stack javascript developer oriented to make
            great, useful websites for the community. My current project is
            designing and developing a website for children's music band
            "Acuarela".
          </p>
          <div className="header-links">
            <a
              className="btn"
              onClick={() => {
                scrollTo(aboutRef);
              }}
              aria-label="Travel to about section"
            >
              Let's go!
            </a>
            <AiFillGithub className="link-icon" />
            <AiFillLinkedin className="link-icon" />
          </div>
        </div>
        <div></div>
      </header>

      <main>
        <section ref={aboutRef} className="about" aria-label="about">
          <div className="about-deco"></div>
          <div>
            <h2>About me</h2>

            <p>
              I started my journey as a self-learner, but then I decided to take
              another step and get formal studies in web development. For the
              last two years I've been developing projects in vanilla JS, React
              and Wordpress.
            </p>
            <p>
              I thrive to build useful and accessible websites, writing clean
              code with focus on the future.
            </p>

            <h2>Tech and Skills</h2>
            <ul className="skill-pills">
              {skills.map((skill) => (
                <ListPill content={skill} />
              ))}
            </ul>
          </div>
        </section>

        <section className="projects">
          <h2>Projects</h2>

          <div className="projects-grid">
            <ProjectCard
              cardTitle="Booket Market"
              description="E-commerce inspired project developed using PERN Stack
              (PostgreSQL, Express, React and Node JS)"
              image={booketMarket}
              preview="https://booketmarket.netlify.app/"
              githubCode="https://github.com/24FContreras/DL_booket"
            />

            <ProjectCard
              cardTitle="World Cup Tracker"
              description="Tracker for the latest world cup Qatar 2022. Developed with
              React. Powered by estiens Public API World Cup Json"
              image={wct}
              position="center"
              preview="https://worldcuptracker.netlify.app/"
              githubCode="https://github.com/24FContreras/React1-WorldCupTracker"
            />

            <ProjectCard
              cardTitle="Calculator"
              description="Calculator project made for The Odin Project. Coded with HTML, CSS and vanilla JavaScript"
              image={calculator}
              position="center"
              preview="https://24fcontreras.github.io/TOP-Calculator/"
              githubCode="https://github.com/24FContreras/TOP-Calculator"
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
