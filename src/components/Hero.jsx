import "../assets/css/Hero.css";
import profile from "../assets/images/profile.jpeg"; 

function Hero() {
  return (
    <section className="hero">
      <img src={profile} alt="Swarna" className="hero-avatar" />

      <p className="hero-intro">
        Hi! I’m <span>Swarna</span> 👋
      </p>

      <h1 className="hero-title">
        Software Engineer
      </h1>

      <p className="hero-subtitle">
        I build clean, scalable web applications with a strong focus on
        performance, usability, and elegant user interfaces.
      </p>

      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Let's Talk</a>
        <a href="#projects" className="btn-secondary">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
