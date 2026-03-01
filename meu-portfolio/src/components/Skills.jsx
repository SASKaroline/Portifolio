export default function Skills() {
  const skills = [
    "HTML, CSS & JavaScript", "React & Node.js", "Python", "Java", "MySQL",
    "Power Apps & Automate", "Power BI", "SharePoint", "Figma", "Git", "BPMN"
  ];

  return (
    <section id="habilidades" className="skills">
      <h2>Minhas <span className="highlight">Habilidades</span></h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}