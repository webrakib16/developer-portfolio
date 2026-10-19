import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title about-label">{config.about.title}</h3>
        <h2 className="about-tagline">
          Turning complex design ideas into seamless,{" "}
          <span>interactive web experience.</span>
        </h2>
        <h4 className="about-subtitle">{config.about.subtitle}</h4>
        <div className="about-paragraphs">
          {config.about.paragraphs.map((para, idx) => (
            <p key={idx} className="about-para">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
