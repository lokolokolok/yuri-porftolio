import "./Experience.css"

const Experience = () => {
  const experiences = [
    {
      company: "FinTech Solutions Inc.",
      role: "Senior QA Engineer",
      period: "Jan 2022 - Present",
      description:
        "Leading the QA team in testing a financial software platform, ensuring compliance with security regulations and improving user interface efficiency. Implementing automated testing frameworks and mentoring junior testers.",
      skills: ["Selenium", "JIRA", "TestRail", "API Testing", "Security Testing"],
    },
    {
      company: "TechCorp Systems",
      role: "QA Analyst",
      period: "Mar 2020 - Dec 2021",
      description:
        "Conducted manual and automated testing for web and mobile applications. Created comprehensive test plans and test cases. Identified and tracked bugs through resolution.",
      skills: ["Manual Testing", "Automated Testing", "Bug Tracking", "Test Case Development"],
    },
    {
      company: "Digital Innovations",
      role: "QA Tester",
      period: "Jun 2018 - Feb 2020",
      description:
        "Performed functional and regression testing for e-commerce applications. Collaborated with developers to resolve issues and improve product quality.",
      skills: ["Functional Testing", "Regression Testing", "User Acceptance Testing"],
    },
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-period">{exp.period}</div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, skillIndex) => (
                    <span className="skill-tag" key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
