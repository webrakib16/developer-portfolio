import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // Start paused
    lenis.stop();

    // Handle smooth scroll animation frame
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle navigation links
    let links = document.querySelectorAll(".header ul a[data-href]");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth >= 768) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section && lenis) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              lenis.scrollTo(target, {
                offset: 0,
                duration: 1.5,
              });
            }
          }
        }
      });
    });

    // Handle resize
    window.addEventListener("resize", () => {
      lenis?.resize();
    });

    return () => {
      lenis?.destroy();
    };
  }, []);

  // Close menu on mobile nav link click
  const handleMobileNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: 0, duration: 1.5 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="header">
        {/* Logo / Name */}
        <a
          href="/#"
          className="navbar-title"
          data-cursor="disable"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            if (lenis) {
              lenis.scrollTo(0, { duration: 1.5 });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          AKIB RAKIB
        </a>

        {/* Center email — desktop only */}
        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>

        {/* Desktop nav links */}
        <ul className="navbar-desktop-links">
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li>
            <a
              href={config.developer.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Rakib_Web_Developer_Resume.pdf"
              className="navbar-resume-btn"
              data-cursor="disable"
              title="Download Resume"
            >
              <HoverLinks text="RESUME" />
            </a>
          </li>
        </ul>

        {/* Mobile right side: Resume + Hamburger */}
        <div className="navbar-mobile-right">
          <a
            href={config.developer.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Rakib_Web_Developer_Resume.pdf"
            className="navbar-resume-btn mobile-resume-btn"
            data-cursor="disable"
            title="Download Resume"
          >
            RESUME
          </a>
          <button
            id="hamburger-btn"
            className={`hamburger-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-cursor="disable"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <nav className="mobile-menu-nav">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleMobileNavClick("#about"); }}
            data-cursor="disable"
          >
            ABOUT
          </a>
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); handleMobileNavClick("#work"); }}
            data-cursor="disable"
          >
            WORK
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleMobileNavClick("#contact"); }}
            data-cursor="disable"
          >
            CONTACT
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
