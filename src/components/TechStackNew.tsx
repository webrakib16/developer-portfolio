import React from "react";
import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// Inverted Pyramid Layout with 100% Original Brand Vector SVGs (Matching Reference UI)
const techStack: TechItem[][] = [
  // Row 1 — 10 items (Frontend & Core Stack)
  [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      url: "https://www.typescriptlang.org",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://react.dev",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      url: "https://nextjs.org",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      url: "https://tailwindcss.com",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      url: "https://expressjs.com",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      url: "https://vite.dev",
    },
  ],
  // Row 2 — 8 items (Databases & Dev Tools)
  [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      url: "https://www.mongodb.com",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      url: "https://www.postgresql.org",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      url: "https://www.mysql.com",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      url: "https://git-scm.com",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      url: "https://github.com",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      url: "https://code.visualstudio.com",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      url: "https://www.postman.com",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      url: "https://vercel.com",
    },
  ],
  // Row 3 — 6 items (Design, UI & APIs)
  [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      url: "https://www.figma.com",
    },
    {
      name: "Hero UI",
      icon: "https://avatars.githubusercontent.com/u/86160567?s=96",
      url: "https://heroui.com",
    },
    {
      name: "DaisyUI",
      icon: "/images/daisyui.svg",
      url: "https://daisyui.com",
    },
    {
      name: "REST APIs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      url: "https://restfulapi.net",
    },
    {
      name: "Authentication",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",
      url: "#",
    },
    {
      name: "Penpot",
      icon: "https://avatars.githubusercontent.com/u/30179644?s=96",
      url: "https://penpot.app",
    },
  ],
  // Row 4 — 4 items (Architecture & Libraries)
  [
    {
      name: "Toastify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://fkhadra.github.io/react-toastify/",
    },
    {
      name: "Better Auth",
      icon: "/images/better-auth.svg",
      url: "https://better-auth.com",
    },
    {
      name: "CRUD Ops",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      url: "#",
    },
    {
      name: "Middleware",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      url: "#",
    },
  ],
  // Row 5 — 2 items (Security & Resilience)
  [
    {
      name: "Authorization",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg",
      url: "#",
    },
    {
      name: "Error Handling",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg",
      url: "#",
    },
  ],
];

const TechStackNew: React.FC = () => {
  return (
    <section className="techstack-new" id="skills">
      {/* Background Video with Ambient Glow */}
      <div className="techstack-video-container">
        <video autoPlay loop muted playsInline className="techstack-video">
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay" />
      </div>

      {/* Main Content */}
      <div className="techstack-content">
        <div className="techstack-header">
          <span className="techstack-pill-tag">✦ EXPERTISE &amp; TOOLS</span>
          <h2 className="techstack-title">Tech Stack</h2>
          <p className="techstack-subtitle">
            Technologies, frameworks, and developer tools I use to craft high-performance applications.
          </p>
        </div>

        {/* Pyramid Layout */}
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url !== "#" ? tech.url : undefined}
                  target={tech.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="techstack-card"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="techstack-icon-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="techstack-name">{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackNew;
