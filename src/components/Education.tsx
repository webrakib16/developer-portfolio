import "./styles/Education.css";
import { config } from "../config";
import { FaGraduationCap, FaBuildingColumns } from "react-icons/fa6";

const Education = () => {
  return (
    <section className="education-section section-container" id="education">
      {/* Ambient background glows */}
      <div className="edu-ambient-glow edu-glow-top" aria-hidden="true"></div>
      <div className="edu-ambient-glow edu-glow-bottom" aria-hidden="true"></div>

      <div className="education-container">
        {/* Header Section */}
        <div className="education-header">
          <div className="edu-badge-pill-header">
            <FaGraduationCap className="edu-badge-icon" />
            <span>MY JOURNEY</span>
          </div>

          <h2 className="edu-title">
            Educa<span className="edu-title-gradient">tion</span>
          </h2>

          <p className="edu-subtitle">
            Academic foundations that shaped the way I think and build.
          </p>
        </div>

        {/* Connecting Neon Path (Desktop) - Curves down to the 2nd middle card */}
        <div className="edu-track-container" aria-hidden="true">
          <svg
            className="edu-track-svg"
            viewBox="0 0 1000 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 160 20 Q 330 25 500 65 Q 670 25 840 20"
              stroke="url(#eduNeonGradient)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              className="edu-animated-path"
            />
            <defs>
              <linearGradient
                id="eduNeonGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#e879f9" stopOpacity="1" />
                <stop offset="75%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="edu-center-sparkle">✦</div>
        </div>

        {/* 3 Education Cards: Card 1 and 3 elevated, Card 2 lower in the middle */}
        <div className="education-grid">
          {config.education.map((item, index) => (
            <div
              key={index}
              className={`edu-card-glass edu-card-item-${index + 1}`}
            >
              {/* Card Top Row: Period & Badge (Arrow icon removed as requested) */}
              <div className="edu-card-top">
                <div className="edu-period-meta">
                  <span className="edu-period-year">{item.period}</span>
                  <span className="edu-status-chip">
                    <span className="edu-chip-dot"></span>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* 3D Graphic Visual */}
              <div className="edu-visual-container">
                <div className="edu-visual-ambient"></div>
                <img
                  src={item.image}
                  alt={item.degree}
                  className="edu-visual-img"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="edu-content-block">
                <h3 className="edu-degree-heading">
                  <FaBuildingColumns className="edu-icon-inline" />
                  {item.degree}
                </h3>

                <div className="edu-institution-row">
                  <FaBuildingColumns className="edu-inst-icon" />
                  <span>{item.institution}</span>
                </div>

                {/* Status/GPA Pill */}
                <div className="edu-status-pill-wrap">
                  <span className="edu-status-pill-content">
                    <span className="edu-status-dot">•</span>
                    {item.status}
                  </span>
                </div>

                {/* Description */}
                <p className="edu-description-text">{item.description}</p>
              </div>

              {/* Card Bottom / Footer: Tag text centered in middle as requested */}
              <div className="edu-card-footer">
                <div className="edu-orb-light"></div>
                <span className="edu-tag-label">{item.tag}</span>
                <div className="edu-bottom-mesh" aria-hidden="true"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
