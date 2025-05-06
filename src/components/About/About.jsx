import "./About.css"
import YurikoProfile from "../../assets/Yuriko_Profile.png" // Correct relative path from About component to assets folder

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-container">
              <img src={YurikoProfile || "/placeholder.svg"} alt="Yuriko Joaquin Torres" />
            </div>
          </div>
          <div className="about-text">
            <div className="about-section">
              <h3>Introduction</h3>
              <p>
                I'm a dedicated Quality Assurance professional with a passion for identifying and resolving software
                issues to enhance user experience. With an analytical mindset and strong problem-solving skills, I
                ensure that every product meets the highest quality standards.
              </p>
            </div>

            <div className="about-section">
              <h3>Skills & Expertise</h3>
              <ul className="skills-list">
                <li>Manual & Automated Testing</li>
                <li>Bug Tracking & Reporting</li>
                <li>Test Case Development</li>
                <li>Selenium, JIRA, TestRail</li>
                <li>API Testing with Postman</li>
                <li>Agile & Scrum Methodologies</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>What I'm Currently Working On</h3>
              <p>
                Currently testing a <strong>financial software platform</strong>, ensuring compliance with security
                regulations and improving user interface efficiency.
              </p>
            </div>

            <div className="about-section">
              <h3>Career Goals</h3>
              <p>
                My goal is to become a <strong>Senior QA Engineer</strong> specializing in test automation and security
                testing. I'm also passionate about mentoring junior testers and contributing to open-source testing
                projects.
              </p>
            </div>

            <div className="about-section">
              <h3>Personal Touch</h3>
              <p>
                Outside of work, I enjoy playing action games, reading tech blogs, and watching youtube. I also
                frequently participate in QA community events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
