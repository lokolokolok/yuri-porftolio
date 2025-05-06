import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">YURIKO JOAQUIN TORRES</h1>
          <h2 className="hero-subtitle">QUALITY ASSURANCE PROFESSIONAL</h2>
          <p className="hero-description">"Ensuring software quality, one test at a time."</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn hero-btn">
              Learn About Me
            </Link>
            <Link to="/projects" className="btn hero-btn hero-btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
