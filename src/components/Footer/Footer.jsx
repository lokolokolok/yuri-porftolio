import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Yuriko Joaquin Torres</h3>
            <p className="footer-description">
              A dedicated Quality Assurance professional ensuring software quality, one test at a time.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/blog">Blog Posts</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="footer-social">
              <a href="https://web.facebook.com/riyu.sero.10" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://github.com/Torres0310" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} <span className="glow">Yuriko Joaquin Torres</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
