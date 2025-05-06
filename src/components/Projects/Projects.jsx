"use client"

import "./Projects.css"
import calcu from "../../assets/calcul.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Simple Calculator",
      description: "A simple scientific calculator",
      image: calcu,
      technologies: ["React", "Java", "TestNG"],
      repoLink: "https://github.com/Torres0310/Scientific-Calculator.git",
      liveLink: "https://imaginative-zabaione-069b8b.netlify.app/",
    },
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      Repository
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
