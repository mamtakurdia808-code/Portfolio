import { useState } from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "FS Practical App",
    description: "Full Stack practical product website.",
    type: "Course",
    domain: "FS",
    link: "https://product-website-zeta.vercel.app/",
  },
  {
    title: "Blog Website",
    description: "React personal blog project.",
    type: "Personal",
    domain: "Frontend",
    link: "/blog",
  },
];

function Portfolio() {
  const [filters, setFilters] = useState({ type: "", domain: "" });

  const filteredProjects = projectsData.filter((p) => 
    (filters.type === "" || p.type === filters.type) &&
    (filters.domain === "" || p.domain === filters.domain)
  );

  return (
    <div className="portfolio-container">
      <h2>My Projects</h2>
      <div className="filters">
        <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="">All Types</option>
          <option value="Course">Course</option>
          <option value="Personal">Personal</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, domain: e.target.value })}>
          <option value="">All Domains</option>
          <option value="FS">FS</option>
          <option value="Frontend">Frontend</option>
        </select>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((p, i) => <Project key={i} project={p} />)}
      </div>
    </div>
  );
}

export default Portfolio;
