# 📌 SAVEME.md - Project Portfolio State & Progress Documentation

> **Purpose for AI / Agent:**  
> This file contains the complete, detailed log of all modifications, architecture decisions, and configurations implemented for **Rakib's Developer Portfolio**. If this file is referenced in any future conversation, read this document to immediately resume context without losing track of any changes or conventions.

---

## 👤 Developer Profile & Configuration Summary

- **Name:** Akib Rakib
- **Email:** `web.rakib16@gmail.com`
- **Phone & WhatsApp:** `01753354825` (`https://wa.me/8801753354825`)
- **Location:** Rajshahi, Bangladesh
- **Role:** Frontend & React Developer / Full Stack Developer
- **Tagline:** *"I Don't Just Write Code. I Build Solutions."*
- **Hero Description:**  
  *"I build modern, responsive web applications using React, Next.js, and TypeScript, while developing backend solutions with Node.js, Express.js, REST APIs, and databases."*
- **Socials:**
  - **GitHub:** `https://github.com/webrakib16`
  - **LinkedIn:** `https://www.linkedin.com/in/web-rakib/`
  - **Facebook:** `https://www.facebook.com/web.rakib16`
  - **Instagram:** `https://www.instagram.com/web.rakib/`
  - *(Note: Twitter/X was deliberately removed and replaced by Facebook across the site).*
- **Education:**
  1. **Bachelor in Chemistry** — Rajshahi College (2022–Present)
  2. **HSC (Higher Secondary Certificate)** — GPA 5.00
  3. **SSC (Secondary School Certificate)** — GPA 5.00
- **Career Journey (6 stages):**
  1. *Full Stack Developer* (2026–NOW)
  2. *AI-Powered Development* (2025)
  3. *Frontend Developer* (2024)
  4. *Graphic Designer & Video Editor* (2023)
  5. *Graphic Designer* (2022)
  6. *Digital Skills Foundation* (2021)

---

## 📂 Detailed File Changes Log

### 1. `src/config.ts`
- **Role:** Central source of truth for portfolio data.
- **Changes Made:**
  - Updated `developer` object with Rakib's name, role, tagline, hero description, core stack pills, and resume path (`/resume.pdf`).
  - Updated `social` object: GitHub, LinkedIn, Facebook, Instagram, email, location (removed Twitter).
  - Updated `about` object: Tagline, subtitle (*"From Chemistry to Code. Building With Purpose."*), and the two narrative paragraphs.
  - Added `skillsList` array with 3 distinct items:
    1. **FRONTEND:** React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, HTML5/CSS3/JavaScript.
    2. **BACKEND:** Node.js, Express.js, RESTful APIs, JWT Authentication, Server-side Rendering (SSR).
    3. **DATABASE & AUTH:** PostgreSQL, MongoDB, MySQL, Better Auth, Firebase, Prisma/Mongoose.
  - Retained `skills.develop` and `skills.design` for backward compatibility with `GsapScroll.ts`.
  - Added `experiences` array (6 items with em-dash format `–`).
  - Added `education` array (3 items for the new Education section).
  - Added `techStacksList` (30 technologies across frontend, backend, databases, tools, design).
  - Updated `projects` array with placeholder projects pointing to `webrakib16` GitHub.
  - Updated `contact` object.

### 2. `index.html`
- Updated title to `Rakib - Frontend & React Developer`.
- Updated meta descriptions and keywords for SEO.

### 3. `src/components/Loading.tsx`
- Changed loader greeting text from `RedoyanulHaque` to `RAKIB`.

### 4. `src/components/Navbar.tsx` & `src/components/styles/Navbar.css`
- Brand changed from `RH` to `RAKIB`.
- Email updated to `web.rakib16@gmail.com`.
- Added **Resume Button** as a pill-styled button (`.navbar-resume-btn`) linking to `config.developer.resume`.
- Modified navigation link queries to use `[data-href]` to prevent the Resume link from triggering GSAP internal page scroll animations.
- Adjusted column gap to 50px for proper alignment with the new button.

### 5. `src/components/Landing.tsx` & `src/components/styles/Landing.css`
- Redesigned Hero section:
  - Header: *"Hello, I'm RAKIB."* with gradient text styling.
  - Role Badge: *"Frontend & React Developer"*.
  - Tagline: *"I Don't Just Write Code. I Build Solutions."*
  - Bio description from `config.developer.description`.
  - Core Tech Stack badge pills.
  - 3 Call-To-Action buttons:
    - `Explore Projects →` (scrolls to `#work`)
    - `Get in Touch` (scrolls to `#contact`)
    - `Download Resume` (downloads `/resume.pdf`)
  - Retained 3D canvas and responsive layout.

### 6. `src/components/About.tsx` & `src/components/styles/About.css`
- Cleaned and updated About section:
  - Label: `ABOUT ME`
  - Tagline: *"Turning complex design ideas into seamless, interactive web experience."*
  - Subtitle: *"From Chemistry to Code. Building With Purpose."*
  - Two detailed paragraphs highlighting Rakib's transition from Chemistry to full-stack web development.
  - Responsive typography and spacing.

### 7. `src/components/WhatIDo.tsx` & `src/components/styles/WhatIDo.css`
- Section title updated to **"SKILLSET & TOOLS"**.
- Converted from a hardcoded 2-box design into a dynamic 3-box accordion layout mapping over `config.skillsList`:
  1. Frontend
  2. Backend
  3. Database & Auth
- Adjusted height calculations (600px desktop) and percentage heights (55% / 22% / 22%) for smooth hover animations.

### 8. `src/components/Career.tsx` & `src/components/styles/Career.css`
- Header updated with `.career-label` (*"MY CAREER & EXPERIENCE"*) and subtitle.
- Period splitting regex updated to handle em-dash (`–`), en-dash, and hyphens so all 6 career milestones render properly.

### 9. `src/components/Education.tsx` & `src/components/styles/Education.css` *(Redesigned to 3D Cyberpunk Glassmorphism)*
- Redesigned into a high-end 3D cyberpunk glassmorphism card showcase matching the reference design:
  - **Header:** `🎓 MY JOURNEY` glowing pill badge, `Education` title with gradient highlight on `tion`, and custom subtitle.
  - **Connecting Track:** Animated horizontal neon SVG curve flowing smoothly from Card 1 down to the middle Card 2 and up to Card 3, with center sparkling diamond star (`✦`).
  - **Staggered Card Heights:** Card 1 and Card 3 are elevated higher (`margin-top: 0`), while Card 2 sits lower in the middle (`margin-top: 55px`) matching the reference UI.
  - **Clean Design Adjustments:**
    - Number circles (`01`, `02`, `03`) removed as requested for a cleaner, modern top edge.
    - Arrow buttons (`↗`) removed from top right of the cards.
    - Bottom category tags (`ACADEMIC GROWTH`, `DISCIPLINE & FOCUS`, `STRONG FOUNDATION`) centered in the card footer with the pulsating light orb on the left.
  - **HSC Board Update:** Updated HSC institution from Rajshahi Board to **Dhaka Board** as requested.
  - **3D Glowing Assets (Transparent PNGs):**
    - Converted all 3D assets to true transparent PNGs with alpha channels (`edu-cap.png`, `edu-book.png`, `edu-diploma.png`), completely eliminating rectangular dark background boxes.
    - Added subtle radial-gradient boundary masks to ensure seamless floating visuals inside the cards.
  - **Custom Cursor & Green Hover Fix (`src/components/styles/Cursor.css`):**
    - Removed `mix-blend-mode: difference` which previously calculated mathematical color differences over purple elements, causing the cursor to turn into an unnatural acid green circle on hover.
    - Replaced with a smooth, adjustable cyberpunk neon purple halo (`border: 1.5px solid rgba(216, 180, 254, 0.6)` and `box-shadow: 0 0 18px 2px rgba(168, 85, 247, 0.45)`) that stays consistently harmonious across the entire site without turning green anywhere.

### 10. `src/components/MainContainer.tsx`
- Integrated `Education` component between `Career` and `Work`.
- Preserves smooth scrolling via Lenis and GSAP ScrollTrigger.

### 11. `src/components/TechStackNew.tsx` & `src/components/styles/TechStackNew.css`
- **100% Authentic Original Icons (Matching Image 2 Reference UI):**
  - Uses original, unedited official SVGs from Devicon CDN and official brand vectors.
  - **Default state:** Icons displayed with subtle monochrome/grayscale brightness filter (`grayscale(100%) contrast(1.2) brightness(1.5)`), exactly as in Image 2.
  - **Hover state:** Filter is removed (`filter: none; opacity: 1; transform: scale(1.1)`), revealing the authentic original multi-color icon.
- **Card Styling Matching Image 2:**
  - **Background NOT dark:** Uses light translucent glass (`rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(8px)`) so the purple cosmic nebula and grid shine through the cards effortlessly.
  - **Hover border color:** Matches the website's theme accent color (`var(--accentColor, #c2a4ff)` with subtle theme glow `0 8px 30px rgba(194, 164, 255, 0.25)`).
  - **Preserved card shape:** Kept the prominent **`90px × 102px`** card shape with rounded `16px` corners.

### 12. `src/components/Contact.tsx` & `src/components/SocialIcons.tsx`
- Removed Twitter icon and links.
- Imported `FaFacebookF` from `react-icons/fa6`.
- Wired all links to `config.social` and `config.contact`.
- Resume button in floating social icons links to `config.developer.resume`.

### 13. `src/pages/Play.tsx`
- Updated 3D character room AI chatbot:
  - System prompt changed to reflect Rakib's persona (Rakib, Chemistry student turned web developer from Rajshahi, Bangladesh).
  - Chat room avatar changed to `/images/mypicnbg.png`.
  - Welcome message personalized for Rakib.

### 14. `Work.tsx`, `ProjectDetailsModal.tsx`, and `src/pages/MyWorks.tsx` *(NEW Work Architecture)*
- Replaced 5 placeholder cards with Rakib's **3 real projects**:
  1. **Bazar Dor** (Bengali-language market price tracker, React + Tailwind, `bazar-dor-h51v.vercel.app`, mockup `/images/project-bazardor.png`).
  2. **FitLog** (Workout tracking app, Next.js + React + Tailwind + DaisyUI, `b14-a6-next-fitlog.vercel.app`, mockup `/images/project-fitlog.png`).
  3. **DevStack** (Tech stack explorer, React + TypeScript + Vite, `a5-react-dev-stack.vercel.app/`, mockup `/images/project-devstack.png`).
- **Exact Card Structure & Normal Color Scheme:**
  - Card colors set to clean, minimalist dark tones (`background: rgba(255, 255, 255, 0.02)`, `border: 1px solid #363636`) matching the rest of the existing website.
  - **Top:** Left corner Number (`01`, `02`, `03`), Right corner Project Name, and subtitle `'Web Application'` underneath.
  - **Middle:** 1-2 line summary paragraph, Tools and features list, and main project laptop mockup image.
  - **Bottom:** Two action buttons (Left: `Project Details`, Right: `Live Demo ↗`).
- **Full Project Details Article & Portal Fix (`ProjectDetailsModal.tsx`):**
  - Rendered via `createPortal(..., document.body)` with `z-index: 999999` so it is never trapped by GSAP transforms or overlapped by the fixed navbar.
  - Cross icon (`✕`) is 100% clickable/tappable on both touch devices and desktop with high z-index and touch handlers.
  - Displays the complete article provided by the user: Project Type, Overview, Purpose (bullet points), Key Focus/Features (bullet points), and Tech Stack breakdown.
  - Scrollable body ensures all content is easily accessible.
- **"Want to see more?" & `/myworks` Navigation:**
  - `See All Works` button styled simply (clean border, no excessive light, changes color on hover).
  - Navigating back to portfolio skips the loading screen entirely via session tracking in `LoadingProvider.tsx`, taking the user directly to the home page.
  - Dedicated upcoming banner: `✦ IN PROGRESS`, `New ideas in progress`, `More projects, Coming Soon` with active `Back to Portfolio` button.

### 15. `Contact.tsx` & `src/components/styles/Contact.css` *(Redesigned to Cyberpunk Glassmorphism Get In Touch)*
- **Header:**
  - Top pill badge: `✦ GET IN TOUCH` with sparkling diamond star and glowing purple border.
  - Title: `Let's Connect` with glowing neon purple/magenta gradient on `Connect`.
  - Subtitle: *"Have an entry-level opening, internship, freelance project, or simply want to chat about tech? My inbox is always open."*
- **Dual-Card Glassmorphism Grid Layout:**
  - **Left Card: Contact Information**
    - `● CONTACT INFORMATION` tag with neon indicator.
    - Title: *"Let's Build Something Amazing Together"* + subtitle.
    - 3 interactive cards with click-to-copy and direct action links (`↗`):
      1. Email Address: `web.rakib16@gmail.com`
      2. Phone / WhatsApp: `+880 1616711677` (links to WhatsApp and tel)
      3. Location: `Rajshahi, Bangladesh`
    - `FIND ME ON`: Row of 5 social buttons (GitHub, LinkedIn, Facebook, Instagram, Portfolio) with hover glow effects.
    - Decorative neon corner wave accent.
  - **Right Card: Send A Direct Message**
    - `● SEND A DIRECT MESSAGE` tag.
    - Subtitle: *"Fill out the form below and I'll respond as soon as possible."*
    - **3D Animated Origami Paper Plane:** Pure SVG origami paper plane with floating hover animation, sparkling stars, and neon trajectory.
    - **Interactive Form:**
      - Name (`FaUser`), Email (`FaEnvelope`), Subject dropdown (`FaBriefcase`), and Message (`FaCommentDots`).
      - Pill submit button: `Send Message →` with spinner, success checkmark state, and mailto fallback.
      - Assurance badge: Shield icon + *"I'll get back to you as soon as possible!"*
- **Contact Section Updates:** Removed redundant contact bottom bar to seamlessly connect with the new Footer.

### 16. `src/components/Footer.tsx` & `src/components/styles/Footer.css` *(Matching Uploaded UI Design)*
- **Clean Matching Layout:**
  - Removed top 3D banner to keep the footer clean, modern, and perfectly blended with the rest of the portfolio.
- **4-Column Layout:**
  - **Column 1 (Brand/Profile):**
    - Name: `Akib Rakib`, Subtitle: `Frontend & React Developer`.
    - Description: *"Building modern, responsive web applications with clean UI and reliable functionality."*
    - Social buttons: GitHub, LinkedIn, Email.
  - **Column 2 (Quick Links):**
    - `Home` (scrolls to top), `About` (scrolls to `#about`), `Work` (scrolls to `#work`), `Contact` (scrolls to `#contact`), `Resume` (downloads/opens resume).
  - **Column 3 (Technologies):**
    - `React.js`, `Next.js`, `TypeScript`, `Tailwind CSS`, `Node.js`.
    - Clicking any of these technologies smoothly scrolls straight to the **Tech Stack** section (`#skills`).
  - **Column 4 (Legal):**
    - `Privacy Policy` and `Terms of Use` with interactive modal dialogs.
- **Bottom Bar:**
  - Copyright: `© 2026 Akib Rakib. All rights reserved.`
  - Credit: `Develop and Design by Akib Rakib`.
  - Circular Back-to-Top button with upward arrow (`↑`) and hover glow.
- **Top 3D Metallic Chrome Banner:**
  - Located directly above the 4 columns in the footer.
  - Background is completely transparent (`mix-blend-mode: screen;`), seamlessly blending into the `#05020c` website dark theme without any black box.
  - Hover effect is completely disabled (static display with no scale or transforms).
- **Scroll & Navigation:** Section uses `id="contact"`, fully connected with Navbar "CONTACT" button and Hero "Get in Touch" button via Lenis smooth scroll.

---

## 🔄 3D Character & Cursor Reset (Original Template Exact Match)

- **Cursor (`Cursor.tsx` & `Cursor.css`):**
  - Restored 100% to the exact original code from the template repository (`Portfolio-Website-main`).
  - Includes original `--size: 50px; background-color: #e6c3ff; box-shadow: 0px 0px 30px 0px rgb(175, 131, 255); mix-blend-mode: difference; border-radius: 50px;`.
  - Restored original `mouseover` / `mouseout` handling on `[data-cursor]`.
- **3D Character (`Scene.tsx`, `character.ts`, `GsapScroll.ts`, `Landing.css`, `MainContainer.tsx`):**
  - Restored 100% to the exact original code from the template repository (`Portfolio-Website-main`).
  - `Scene.tsx`: Original Three.js renderer configuration, antialias, and event listeners.
  - `character.ts`: Original Draco GLTF loader logic, shadow casting, and foot positioning.
  - `GsapScroll.ts`: Original GSAP scrub timelines (`tl1`, `tl2`, `tl3`) and character positioning.
  - `MainContainer.tsx`: Rendered directly via `{isDesktopView && children}` without any mount delays or idle callbacks.
  - `SocialIcons.tsx` & `SocialIcons.css`: Restored to original code.

---

## 🛠️ Verification & Build Status

- **Build Command:** `npm run build` (`tsc -b && vite build`)
- **Result:** ✅ Passed with 0 errors (`built in 12.80s`).
- **Dev Server:** Running continuously on `http://localhost:5173`.
- **References:** Name unified to `Akib Rakib` across config, index.html, loading, navbar, hero, play, and footer.

---

## 📌 Resume Configuration (Completed)

- **File Location:** `public/Rakib_Web_Developer_Resume.pdf` and `public/resume.pdf` (Copied from `dist/images/Rakib_Web_Developer_Resume.pdf`).
- **Config Link:** `config.developer.resume` points to `"/Rakib_Web_Developer_Resume.pdf"`.
- **Linked Buttons:**
  1. **Navbar RESUME button:** Directly opens and downloads `Rakib_Web_Developer_Resume.pdf`.
  2. **Social Sidebar (Bottom Right) RESUME button:** Opens and downloads `Rakib_Web_Developer_Resume.pdf`.
  3. **Footer Quick Links (Resume):** Opens and downloads `Rakib_Web_Developer_Resume.pdf`.

---

## 📌 Optional Next Steps for Akib Rakib
   - When ready to showcase custom projects, update the screenshots in `public/images/` and update project titles/descriptions in `src/config.ts` (`config.projects`).
3. **Profile Picture (Optional):**
   - The site uses `public/images/mypicnbg.png` for mobile hero and the 3D play room avatar. You can replace this image with your own transparent PNG if you wish.

---

> **Note for Future AI Agents:** Whenever you are instructed with *"look at SAVEME.md"* or asked to continue work, review this document first. All patterns, file mappings, and data structures are defined here.
