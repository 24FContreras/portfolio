import "./../assets/css/ProjectCard.css";

const ProjectCard = ({
  cardTitle,
  description,
  image,
  preview,
  githubCode,
  buttonsText,
}) => {
  return (
    <>
      <div className="project-card">
        <img src={image} alt={cardTitle} />

        <div className="card-body">
          <h3>{cardTitle}</h3>
          <p>{description}</p>
        </div>

        <div className="card-links">
          <a href={preview} target="_blank" rel="noopener noreferrer">
            {buttonsText[0]}
          </a>
          <a href={githubCode} target="_blank" rel="noopener noreferrer">
            {buttonsText[1]}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
