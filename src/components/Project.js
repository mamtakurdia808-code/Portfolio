function Project({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        <span className="type">{project.type}</span>
        <span className="domain">{project.domain}</span>
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="view-btn">
        View Project
      </a>
    </div>
  );
}

export default Project;
