import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./styles/ProjectDetailsModal.css";
import { FaExternalLinkAlt, FaTimes, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { lenis } from "./Navbar";

export interface ProjectData {
  id: number;
  title: string;
  subtitle?: string;
  category?: string;
  shortDescription?: string;
  description?: string;
  overview?: string;
  purpose?: string[];
  keyFeatures?: string[];
  keyFocus?: string[];
  technologies?: string;
  techStack?: {
    frontend?: string[];
    styling?: string[];
    api?: string[];
    concepts?: string[];
    tools?: string[];
  };
  image: string;
  link: string;
}

interface Props {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<Props> = ({ project, onClose }) => {
  // Close on Escape key, prevent background scroll, and pause Lenis
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    // Stop Lenis so wheel events don't leak to the GSAP-pinned section
    if (lenis) lenis.stop();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      if (lenis) lenis.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const featuresOrFocus = project.keyFeatures || project.keyFocus || [];

  const modalContent = (
    <div
      className="proj-modal-backdrop"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="proj-modal-container"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Floating Top Close Button */}
        <button
          type="button"
          className="proj-modal-close"
          onClick={onClose}
          onTouchEnd={(e) => {
            e.preventDefault();
            onClose();
          }}
          aria-label="Close details"
          data-cursor="disable"
        >
          <FaTimes />
        </button>

        {/* Modal Header */}
        <div className="proj-modal-header">
          <div className="proj-modal-badge">
            <FaLaptopCode />
            <span>Project Type: {project.subtitle || project.category || "Web Application"}</span>
          </div>
          <h2 className="proj-modal-title">{project.title}</h2>

          {/* Action Links */}
          <div className="proj-modal-actions">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-modal-btn proj-btn-live"
                data-cursor="disable"
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className="proj-btn-icon" />
              </a>
            )}
          </div>
        </div>

        {/* Scrollable Content Body with Full Article Details */}
        <div className="proj-modal-body">
          {/* Main Mockup Image Preview */}
          <div className="proj-modal-mockup">
            <img
              src={project.image}
              alt={project.title}
              className="proj-mockup-img"
              loading="lazy"
            />
          </div>

          {/* Section: Overview */}
          {project.overview && (
            <div className="proj-modal-section">
              <h3 className="proj-section-title">
                <span className="proj-title-bar"></span>
                Overview
              </h3>
              <p className="proj-section-text">{project.overview}</p>
            </div>
          )}

          {/* Section: Purpose */}
          {project.purpose && project.purpose.length > 0 && (
            <div className="proj-modal-section">
              <h3 className="proj-section-title">
                <span className="proj-title-bar"></span>
                Purpose
              </h3>
              <ul className="proj-list">
                {project.purpose.map((item, i) => (
                  <li key={i} className="proj-list-item">
                    <span className="proj-bullet">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Key Focus / Key Features */}
          {featuresOrFocus.length > 0 && (
            <div className="proj-modal-section">
              <h3 className="proj-section-title">
                <span className="proj-title-bar"></span>
                {project.keyFeatures ? "Key Features" : "Key Focus"}
              </h3>
              <ul className="proj-list">
                {featuresOrFocus.map((feature, i) => (
                  <li key={i} className="proj-list-item">
                    <FaCheckCircle className="proj-check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Tech Stack */}
          <div className="proj-modal-section">
            <h3 className="proj-section-title">
              <span className="proj-title-bar"></span>
              Tech Stack
            </h3>

            {project.techStack ? (
              <div className="proj-tech-breakdown">
                {project.techStack.frontend && (
                  <div className="proj-tech-group">
                    <span className="proj-tech-group-label">• Frontend:</span>
                    <span className="proj-tech-group-val">
                      {project.techStack.frontend.join(", ")}
                    </span>
                  </div>
                )}
                {project.techStack.styling && (
                  <div className="proj-tech-group">
                    <span className="proj-tech-group-label">• Styling:</span>
                    <span className="proj-tech-group-val">
                      {project.techStack.styling.join(", ")}
                    </span>
                  </div>
                )}
                {project.techStack.api && (
                  <div className="proj-tech-group">
                    <span className="proj-tech-group-label">• API &amp; Data Fetching:</span>
                    <span className="proj-tech-group-val">
                      {project.techStack.api.join(", ")}
                    </span>
                  </div>
                )}
                {project.techStack.concepts && (
                  <div className="proj-tech-group">
                    <span className="proj-tech-group-label">• React Concepts:</span>
                    <span className="proj-tech-group-val">
                      {project.techStack.concepts.join(", ")}
                    </span>
                  </div>
                )}
                {project.techStack.tools && (
                  <div className="proj-tech-group">
                    <span className="proj-tech-group-label">• Tools:</span>
                    <span className="proj-tech-group-val">
                      {project.techStack.tools.join(", ")}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <p className="proj-section-text">{project.technologies}</p>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="proj-modal-footer">
          <button
            type="button"
            className="proj-footer-close"
            onClick={onClose}
            data-cursor="disable"
          >
            Close Details
          </button>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-footer-live"
              data-cursor="disable"
            >
              <span>Visit Live App</span>
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectDetailsModal;
