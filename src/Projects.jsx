import {useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const scrollContainerRef = useRef();

  const projects = [
    {
      id: 0,
      title: "Digital Home",
      subtitle: "Retro Portfolio Website",
      type: "Web Application",
      tech: ["Vite-React", "Tailwind CSS", "GSAP", "Figma","Supabase", "JSX"],
      description: "A thoughtfully designed digital space that reflects my academic and technical journey as a Computer Science undergraduate. Featuring a retro-inspired interface with modern web technologies, the site demonstrates Ekansh's expertise in front-end development, animation with GSAP, and full-stack integration using tools like React and Supabase. Explore interactive components, such as draggable modals, animated elements, and a dynamic digital journal that fetches real-time entries from a cloud database.",
      status: "COMPLETED",
      image: "🌐",
      link: "https://your-digital-home-link.com" 
    },
    {
      id: 1,
      title: "The Bald Eagle",
      subtitle: "Research Project",
      type: "BioInspired Robotics",
      tech: ["Arduino", "C", "Fusion360"],
      description: "Wingeneered explores the aerodynamic advantages of bald eagle-inspired wingtip designs to improve energy efficiency in drones and small aircraft. By combining flexible TPU 3D-printed structures with a servo-controlled pulley system, the project aims to reduce drag and enhance lift, contributing to bio-inspired flight innovation and sustainable monitoring in regions like the Chesapeake Bay, Maryland.",
      status: "COMPLETED",
      image: "🦅",
      link: "/bird.pdf" 
    },
    {
      id: 2,
      title: "Brewery Finder",
      subtitle: "API USAGE",
      type: "Web Dev",
      tech: ["HTML", "CSS", "javascript"],
      description: "Helps you locate the nearest breweries for your great tastes!",
      status: "COMPLETED",
      image: "🍺",
      link: "https://github.com/russianraspberry14/brewery-finder/tree/main"
    },
    {
      id: 3,
      title: "Handwritten Digit Recognition",
      subtitle: "Image Recognition",
      type: "Machine Learning",
      tech: ["Python (TensorFlow, PyTorch, Scikit-Learn, OpenCV, Keras)"],
      description: "Upload Images of handwritten digits to convert them to text using a trained model that outputs probabilities of likely characters.",
      status: "Beta",
      image: "🤖",
      link: "https://your-digit-recognition-link.com" 
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED': return '#ffffff';
      case 'IN PROGRESS': return '#ffff00';
      default: return '#ffffff';
    }
  };

  const handleViewProject = (link) => {
    if (link) {
      window.open(link, '_blank'); 
    }
  };

  return (
    <div className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">
          <span className="pixel-text"> PROJECT ARCHIVES </span>
        </h2>
      </div>

      <div className="projects-container" ref={scrollContainerRef}>
        <div className="projects-track">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
            >
              <div className="card-header">
                <div className="project-icon">{project.image}</div>
                <div className="status-indicator" style={{color: getStatusColor(project.status)}}>
                  ● {project.status}
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-type">{project.type}</div>
                
                <div className="expanded-content">
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    <h4>Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="action-buttons">
                    <button 
                      className="btn-primary"
                      onClick={() => handleViewProject(project.link)}
                    >
                      VIEW PROJECT
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span>← SCROLL TO EXPLORE →</span>
      </div>
    </div>
  );
};

export default Projects;