import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";
import { FaExternalLinkAlt, FaInfoCircle, FaArrowLeft, FaRocket } from "react-icons/fa";
import ProjectDetailsModal, { ProjectData } from "../components/ProjectDetailsModal";

const MyWorks = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  // 3 featured real projects
  const projects = config.projects.slice(0, 3);

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          <FaArrowLeft className="back-btn-icon" />
          <span>Back to Portfolio</span>
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of my full-stack and frontend web applications</p>
      </div>

      {/* Grid of Real Projects */}
      <div className="myworks-grid">
        {projects.map((project, index) => (
          <div className="myworks-card-custom" key={project.id}>
            {/* Top row */}
            <div className="myworks-card-top-bar">
              <span className="myworks-card-index">0{index + 1}</span>
              <div className="myworks-title-box">
                <h3 className="myworks-card-heading">{project.title}</h3>
                <span className="myworks-card-sub">{project.subtitle || "Web Application"}</span>
              </div>
            </div>

            {/* Mockup Image Preview */}
            <div
              className="myworks-image-container"
              onClick={() => setActiveModalProject(project as ProjectData)}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />
              <div className="myworks-image-overlay">
                <FaInfoCircle />
                <span>View Details</span>
              </div>
            </div>

            {/* Info Area */}
            <div className="myworks-card-content">
              <p className="myworks-card-lead">
                {project.shortDescription || project.description}
              </p>

              <div className="myworks-tech-box">
                <span className="myworks-tech-tag">Tools and features:</span>
                <p className="myworks-tech-str">{project.technologies}</p>
              </div>

              {/* Action Buttons */}
              <div className="myworks-btn-row">
                <button
                  type="button"
                  className="myworks-act-btn myworks-btn-modal"
                  onClick={() => setActiveModalProject(project as ProjectData)}
                  data-cursor="disable"
                >
                  <FaInfoCircle />
                  <span>Project Details</span>
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="myworks-act-btn myworks-btn-live"
                  data-cursor="disable"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "New ideas in progress. More projects, Coming Soon" Showcase Banner */}
      <div className="myworks-upcoming-section">
        <div className="myworks-upcoming-card">
          <div className="upcoming-badge">
            <FaRocket />
            <span>✦ IN PROGRESS</span>
          </div>
          <h2>New ideas in progress</h2>
          <p className="upcoming-highlight">More projects, Coming Soon</p>
          <p className="upcoming-desc">
            Currently architecting full-stack web applications with modern backend architectures,
            intelligent APIs, and robust databases. Stay tuned for exciting new releases.
          </p>
          <Link to="/" className="upcoming-back-btn" data-cursor="disable">
            <FaArrowLeft />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};

export default MyWorks;
