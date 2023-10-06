import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faNodeJs, faGitAlt, faPython } from "@fortawesome/free-brands-svg-icons";

function SkillItem({ name, icon }) {
  return (
    <div className="col-md-3 mb-5">
      <div className="bg-secondary text-white p-4 rounded text-center">
        <FontAwesomeIcon icon={icon} className="text-success h4 mb-3" alt={`${name} Icon`} />
        <h4 className="h6">{name}</h4>
      </div>
    </div>
  );
}

const skills = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3 },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "Node.js", icon: faNodeJs },
  { name: "Python", icon: faPython },
  { name: "Git", icon: faGitAlt },
  { name: "Django", icon: faPython }, // Make sure the icons are distinct if these are different technologies
];

export default function Skills() {
  return (
    <section id="skills" className="bg-dark py-5 my-4">
      <div className="container">
        <div className="text-center mb-5">
          <i className="bi bi-chip h2 mb-4"></i>
          <h1 className="display-4 text-white mb-4">Skills &amp; Technologies</h1>
          <p className="lead text-white">
            Some of the technologies that I have been working on
          </p>
        </div>
        <div className="row">
          {skills.map(({ name, icon }, index) => (
            <SkillItem key={index} name={name} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
