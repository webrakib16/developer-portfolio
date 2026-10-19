import React, { useState } from "react";
import "./styles/Footer.css";
import { config } from "../config";
import { lenis } from "./Navbar";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp, FaTimes } from "react-icons/fa";

const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const scrollTo = (targetId: string) => {
    if (targetId === "top") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.querySelector(targetId) as HTMLElement;
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, { offset: 0, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="portfolio-footer">
      {/* 3D Metallic Chrome Banner with transparent blend mode & no hover scale */}
      <div className="footer-3d-banner-wrap">
        <img
          src="/images/footer-rakib-3d.png"
          alt="Akib Rakib 3D Metallic Chrome Logo"
          className="footer-3d-banner-img"
        />
      </div>

      {/* MAIN 4-COLUMN FOOTER CONTENT */}
      <div className="footer-container">
        <div className="footer-columns-grid">
          {/* Column 1: Profile & Bio */}
          <div className="footer-col footer-col-brand">
            <h3 className="footer-brand-name">Akib Rakib</h3>
            <span className="footer-brand-title">Frontend &amp; React Developer</span>
            <p className="footer-brand-desc">
              Building modern, responsive web applications with clean UI and reliable functionality.
            </p>
            <div className="footer-social-icons">
              <a
                href={config.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
                data-cursor="disable"
              >
                <FaGithub />
              </a>
              <a
                href={config.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
                data-cursor="disable"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`mailto:${config.contact.email}`}
                className="footer-social-btn"
                aria-label="Email"
                data-cursor="disable"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("top")}
                  className="footer-nav-link"
                  data-cursor="disable"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#about")}
                  className="footer-nav-link"
                  data-cursor="disable"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#work")}
                  className="footer-nav-link"
                  data-cursor="disable"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="footer-nav-link"
                  data-cursor="disable"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href={config.developer.resume}
                  download="Rakib_Web_Developer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                  data-cursor="disable"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Technologies (Clicking scrolls to TechStack) */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Technologies</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#skills")}
                  className="footer-nav-link"
                  title="View in Tech Stack"
                  data-cursor="disable"
                >
                  React.js
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#skills")}
                  className="footer-nav-link"
                  title="View in Tech Stack"
                  data-cursor="disable"
                >
                  Next.js
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#skills")}
                  className="footer-nav-link"
                  title="View in Tech Stack"
                  data-cursor="disable"
                >
                  TypeScript
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#skills")}
                  className="footer-nav-link"
                  title="View in Tech Stack"
                  data-cursor="disable"
                >
                  Tailwind CSS
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("#skills")}
                  className="footer-nav-link"
                  title="View in Tech Stack"
                  data-cursor="disable"
                >
                  Node.js
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Legal</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal("privacy")}
                  className="footer-nav-link"
                  data-cursor="disable"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal("terms")}
                  className="footer-nav-link"
                  data-cursor="disable"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Akib Rakib. All rights reserved.
          </div>

          <div className="footer-bottom-right">
            <span className="footer-designer-credit">
              Develop and Design by{" "}
              <strong className="footer-credit-name">Akib Rakib</strong>
            </span>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={() => scrollTo("top")}
              className="footer-back-to-top"
              aria-label="Scroll back to top"
              title="Back to Top"
              data-cursor="disable"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Lightweight Legal Modal */}
      {legalModal && (
        <div className="footer-legal-modal-backdrop" onClick={() => setLegalModal(null)}>
          <div className="footer-legal-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="footer-legal-close"
              onClick={() => setLegalModal(null)}
              aria-label="Close"
              data-cursor="disable"
            >
              <FaTimes />
            </button>
            <h3 className="footer-legal-title">
              {legalModal === "privacy" ? "Privacy Policy" : "Terms of Use"}
            </h3>
            <p className="footer-legal-body">
              {legalModal === "privacy"
                ? "This developer portfolio does not collect personal tracking cookies or sell your personal data. Any contact requests submitted through the form are sent directly to Akib Rakib via email for professional communication purposes only."
                : "All projects, creative code demonstrations, and portfolio assets are created by Akib Rakib. You are welcome to browse, inspect, and connect for software development inquiries."}
            </p>
            <button
              type="button"
              className="footer-legal-ok-btn"
              onClick={() => setLegalModal(null)}
              data-cursor="disable"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
