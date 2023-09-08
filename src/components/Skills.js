import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faPython, // Add Python icon
  faGitAlt, // Add Git icon
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Node.js", icon: faNodeJs },
    { name: "Python", icon: faPython }, // Python skill with icon
    { name: "Django", icon: faPython }, // Django skill (using Python icon)
    { name: "Git", icon: faGitAlt }, // Git skill with icon
  ];

  return (
    
    <section id="skills" className="bg-dark py-5 my-4" style={{ marginTop: '20px', marginBottom: '30px', padding: '10px' }}>
      <div className="container"  >
        <div className="text-center mb-5">
          <i className="bi bi-chip h2 mb-4"></i>
          <h1 className="display-4 text-white mb-4">Skills &amp; Technologies</h1>
          <p className="lead text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-3 mb-5">
              <div className="bg-secondary text-white p-4 rounded text-center">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-success h4 mb-3"
                />
                <h4 className="h6">{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}
