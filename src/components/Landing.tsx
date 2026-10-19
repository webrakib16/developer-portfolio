import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { lenis } from "./Navbar";

const Landing = ({ children }: PropsWithChildren) => {
  const scrollTo = (targetId: string) => {
    if (lenis) {
      lenis.scrollTo(targetId, { offset: 0, duration: 1.4 });
    } else {
      const target = document.querySelector(targetId) as HTMLElement;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = targetId;
      }
    }
  };

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello, I'm</h2>
            <h1 className="hero-name">
              AKIB RAKIB.
            </h1>
            <div className="hero-role-wrapper">
              <span className="hero-role-badge">Frontend &amp; React Developer</span>
            </div>
            <p className="hero-tagline">
              I Don't Just Write Code. <span>I Build Solutions.</span>
            </p>
          </div>

          <div className="landing-info">
            <div className="hero-article-card">
              <div className="hero-card-badge">
                <span className="hero-badge-dot" />
                <span>EXPERTISE &amp; VISION</span>
              </div>

              <p className="hero-desc">
                I build modern, responsive web applications using{" "}
                <span className="hero-hl">React</span>, <span className="hero-hl">Next.js</span>, and{" "}
                <span className="hero-hl">TypeScript</span>, while developing backend solutions with{" "}
                <span className="hero-hl">Node.js</span>, <span className="hero-hl">Express.js</span>,{" "}
                <span className="hero-hl">REST APIs</span>, and modern databases.
              </p>

              <div className="hero-stack-container">
                <span className="hero-stack-label">Core Tech Stack</span>
                <div className="hero-stack-pills">
                  {config.developer.coreStack.map((tech, idx) => (
                    <span key={idx} className="hero-pill">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="hero-actions">
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#work");
                  }}
                  className="hero-btn hero-btn-primary"
                  data-cursor="disable"
                >
                  Explore Projects →
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contact");
                  }}
                  className="hero-btn hero-btn-secondary"
                  data-cursor="disable"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img
              src="/images/mypicnbg.png"
              alt="Akib Rakib"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
