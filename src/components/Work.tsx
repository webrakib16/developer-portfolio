import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import ProjectDetailsModal, { ProjectData } from "./ProjectDetailsModal";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    // Disable pinning on mobile to allow natural vertical scrolling
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  // Display only the 3 featured projects
  const displayProjects = config.projects.slice(0, 3);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {displayProjects.map((project, index) => (
            <div className="work-box" key={project.id}>
              {/* 1. TOP: Left corner Number, Right corner Project Name & Subtitle */}
              <div className="work-card-top">
                <span className="work-card-number">0{index + 1}</span>
                <div className="work-card-title-group">
                  <h3 className="work-card-title">{project.title}</h3>
                  <span className="work-card-subtitle">
                    {project.subtitle || "Web Application"}
                  </span>
                </div>
              </div>

              {/* 2. MIDDLE: Paragraph, Tools and Features, and Main Project Image */}
              <div className="work-card-middle">
                <p className="work-card-desc">
                  {project.shortDescription || project.description}
                </p>

                <div className="work-tools-group">
                  <h4 className="work-tools-heading">Tools and features</h4>
                  <p className="work-tools-text">{project.technologies}</p>
                </div>

                <div
                  className="work-mockup-wrapper"
                  onClick={() => setActiveModalProject(project as ProjectData)}
                  title="Click to view full project details"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="work-mockup-img"
                    loading="lazy"
                  />
                  <div className="work-mockup-badge">
                    <FaInfoCircle />
                    <span>View Details</span>
                  </div>
                </div>
              </div>

              {/* 3. BOTTOM: Two action buttons: Left Project Details, Right Live Demo */}
              <div className="work-card-bottom">
                <button
                  type="button"
                  className="work-action-btn work-btn-details"
                  onClick={() => setActiveModalProject(project as ProjectData)}
                  data-cursor="disable"
                >
                  <span>Project Details</span>
                  <FaInfoCircle className="work-btn-icon" />
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-action-btn work-btn-live"
                  data-cursor="disable"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="work-btn-icon" />
                </a>
              </div>
            </div>
          ))}

          {/* See All Works Box */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <span className="see-all-badge">✦ IN PROGRESS</span>
              <h3>Want to see more?</h3>
              <p>New ideas in progress. More projects, Coming Soon</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                <span>See All Works</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectDetailsModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};

export default Work;
