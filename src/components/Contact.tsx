import React, { useState, useEffect } from "react";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaBriefcase,
  FaCommentDots,
  FaPaperPlane,
  FaShieldAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity / Project Inquiry",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".contact-main-title, .contact-subtitle",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }
      )
        .fromTo(
          ".contact-card-glass",
          { opacity: 0, y: 45, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".contact-info-item",
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopyFeedback(`${label} copied!`);
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState("submitting");

    // Construct mailto link with encoded parameters
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject / Role: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${config.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      // Trigger the mail client
      window.location.href = mailtoUrl;

      setFormState("success");
      setFormData({
        name: "",
        email: "",
        subject: "Job Opportunity / Project Inquiry",
        message: "",
      });

      setTimeout(() => {
        setFormState("idle");
      }, 5000);
    }, 700);
  };

  return (
    <section className="contact-section" id="contact">
      {/* Ambient Cosmic Purple Lighting Orbs */}
      <div className="contact-ambient-glow contact-glow-top-left" />
      <div className="contact-ambient-glow contact-glow-top-right" />
      <div className="contact-ambient-glow contact-glow-center" />

      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header-wrap">
          <h2 className="contact-main-title">
            Get In <span className="contact-neon-gradient">Touch</span>
          </h2>

          <p className="contact-subtitle">
            Have an entry-level opening, internship, freelance project, or simply want to chat
            about tech? My inbox is always open.
          </p>
        </div>

        {/* Copy Notification Toast */}
        {copyFeedback && (
          <div className="contact-copy-toast">
            <FaCheck />
            <span>{copyFeedback}</span>
          </div>
        )}

        {/* Dual Cards Grid */}
        <div className="contact-grid">
          {/* ========================================================
              LEFT CARD: CONTACT INFORMATION
             ======================================================== */}
          <div className="contact-card-glass contact-card-left">
            {/* Header pill */}
            <div className="contact-card-tag">
              <span className="tag-dot" />
              <span>CONTACT INFORMATION</span>
            </div>

            {/* Title & Description */}
            <h3 className="contact-info-title">
              Let's Build Something <span className="contact-neon-word">Amazing</span> Together
            </h3>
            <p className="contact-info-desc">
              I am actively looking for junior frontend, MERN stack, or full-stack opportunities and
              I am available to join immediately.
            </p>

            {/* Interactive Info Items */}
            <div className="contact-info-list">
              {/* Email Card */}
              <div
                className="contact-info-item"
                onClick={() => handleCopy(config.contact.email, "Email")}
                title="Click to copy or send email"
              >
                <div className="contact-item-icon-box">
                  <FaEnvelope className="contact-item-icon" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">EMAIL ADDRESS</span>
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="contact-item-value"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="disable"
                  >
                    {config.contact.email}
                  </a>
                </div>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="contact-item-action-btn"
                  title="Open Mail"
                  data-cursor="disable"
                >
                  <MdArrowOutward />
                </a>
              </div>

              {/* Phone / WhatsApp Card */}
              <div
                className="contact-info-item"
                onClick={() => handleCopy(config.contact.phone, "Phone number")}
                title="Click to copy or open WhatsApp"
              >
                <div className="contact-item-icon-box">
                  <FaPhoneAlt className="contact-item-icon" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">PHONE / WHATSAPP</span>
                  <a
                    href={config.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-value"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="disable"
                  >
                    {config.contact.phone}
                  </a>
                </div>
                <a
                  href={config.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-action-btn"
                  title="Open WhatsApp"
                  data-cursor="disable"
                >
                  <MdArrowOutward />
                </a>
              </div>

              {/* Location Card */}
              <div
                className="contact-info-item"
                onClick={() => handleCopy(config.contact.location, "Location")}
                title="Click to copy location"
              >
                <div className="contact-item-icon-box">
                  <FaMapMarkerAlt className="contact-item-icon" />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">LOCATION</span>
                  <span className="contact-item-value">{config.contact.location}</span>
                </div>
                <div className="contact-item-action-btn">
                  <MdArrowOutward />
                </div>
              </div>
            </div>

            {/* Find Me On Social Links */}
            <div className="contact-socials-wrap">
              <span className="contact-socials-label">FIND ME ON</span>
              <div className="contact-socials-row">
                <a
                  href={config.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                  aria-label="GitHub"
                  data-cursor="disable"
                >
                  <FaGithub />
                </a>
                <a
                  href={config.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                  aria-label="LinkedIn"
                  data-cursor="disable"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={config.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                  aria-label="Facebook"
                  data-cursor="disable"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={config.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                  aria-label="Instagram"
                  data-cursor="disable"
                >
                  <FaInstagram />
                </a>
                <a
                  href="/"
                  className="contact-social-btn"
                  aria-label="Portfolio Website"
                  data-cursor="disable"
                  title="Portfolio Website"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>

            {/* Decorative Neon Curve Accent */}
            <div className="contact-card-deco-wave" />
          </div>

          {/* ========================================================
              RIGHT CARD: SEND A DIRECT MESSAGE (FORM)
             ======================================================== */}
          <div className="contact-card-glass contact-card-right">
            {/* Header pill */}
            <div className="contact-card-tag">
              <span className="tag-dot" />
              <span>SEND A DIRECT MESSAGE</span>
            </div>

            {/* Card Subheading */}
            <h3 className="contact-form-title">
              Fill out the form below and I'll respond as soon as possible.
            </h3>

            {/* 3D Animated Paper Plane Floating Illustration */}
            <div className="contact-plane-badge">
              <svg
                className="contact-plane-svg"
                viewBox="0 0 140 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Glowing trail lines */}
                <path
                  d="M15 95 C 40 85, 75 75, 95 45"
                  stroke="rgba(192, 132, 252, 0.45)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="95" cy="45" r="2" fill="#c084fc" />
                <circle cx="35" cy="88" r="1.5" fill="#e879f9" />
                {/* Sparkle star 1 */}
                <path
                  d="M118 20 Q 118 28 126 28 Q 118 28 118 36 Q 118 28 110 28 Q 118 28 118 20"
                  fill="#fdf4ff"
                  opacity="0.9"
                />
                {/* Sparkle star 2 */}
                <path
                  d="M20 35 Q 20 40 25 40 Q 20 40 20 45 Q 20 40 15 40 Q 20 40 20 35"
                  fill="#c084fc"
                  opacity="0.75"
                />
                {/* Origami Paper Plane Polygons */}
                <polygon
                  points="130,25 35,68 75,82"
                  fill="url(#planeGrad1)"
                  filter="drop-shadow(0 6px 16px rgba(168, 85, 247, 0.5))"
                />
                <polygon points="130,25 75,82 85,108" fill="url(#planeGrad2)" />
                <polygon points="130,25 85,108 102,68" fill="url(#planeGrad3)" />
                <polygon points="75,82 85,108 92,85" fill="#581c87" />

                <defs>
                  <linearGradient id="planeGrad1" x1="130" y1="25" x2="35" y2="82" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e879f9" />
                    <stop offset="0.6" stopColor="#a855f7" />
                    <stop offset="1" stopColor="#7e22ce" />
                  </linearGradient>
                  <linearGradient id="planeGrad2" x1="130" y1="25" x2="85" y2="108" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9333ea" />
                    <stop offset="1" stopColor="#581c87" />
                  </linearGradient>
                  <linearGradient id="planeGrad3" x1="130" y1="25" x2="102" y2="68" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c084fc" />
                    <stop offset="1" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Interactive Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Row 1: Name and Email */}
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contact-name" className="contact-form-label">
                    YOUR NAME <span className="label-req">*</span>
                  </label>
                  <div className="contact-input-wrap">
                    <FaUser className="contact-input-icon" />
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="contact-input"
                      data-cursor="disable"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-email" className="contact-form-label">
                    EMAIL ADDRESS <span className="label-req">*</span>
                  </label>
                  <div className="contact-input-wrap">
                    <FaEnvelope className="contact-input-icon" />
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="contact-input"
                      data-cursor="disable"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Subject / Role */}
              <div className="contact-form-group">
                <label htmlFor="contact-subject" className="contact-form-label">
                  SUBJECT / ROLE
                </label>
                <div className="contact-input-wrap">
                  <FaBriefcase className="contact-input-icon" />
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input contact-select"
                    data-cursor="disable"
                  >
                    <option value="Job Opportunity / Project Inquiry">
                      Job Opportunity / Project Inquiry
                    </option>
                    <option value="Junior Frontend Developer Role">
                      Junior Frontend Developer Role
                    </option>
                    <option value="Full-Stack / MERN Developer Role">
                      Full-Stack / MERN Developer Role
                    </option>
                    <option value="Freelance Project Inquiry">
                      Freelance Project Inquiry
                    </option>
                    <option value="Mentorship / Tech Discussion">
                      Mentorship / Tech Discussion
                    </option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="contact-form-group">
                <label htmlFor="contact-message" className="contact-form-label">
                  YOUR MESSAGE <span className="label-req">*</span>
                </label>
                <div className="contact-input-wrap contact-textarea-wrap">
                  <FaCommentDots className="contact-input-icon contact-textarea-icon" />
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello! We are looking for a Junior Frontend Developer to join our team..."
                    required
                    className="contact-input contact-textarea"
                    data-cursor="disable"
                  />
                </div>
              </div>

              {/* Form Bottom Row: Submit Button & Response Assurance */}
              <div className="contact-form-bottom">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className={`contact-submit-btn ${formState === "success" ? "btn-success" : ""}`}
                  data-cursor="disable"
                >
                  {formState === "submitting" ? (
                    <>
                      <FaSpinner className="btn-spinner" />
                      <span>Sending...</span>
                    </>
                  ) : formState === "success" ? (
                    <>
                      <FaCheck />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-plane-icon" />
                      <span>Send Message</span>
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>

                <div className="contact-assurance">
                  <FaShieldAlt className="assurance-icon" />
                  <span className="assurance-text">
                    I'll get back to you <br className="assurance-br" />
                    as soon as possible!
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
