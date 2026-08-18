import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faGitAlt, faGithub, faFigma,faNodeJs, faDailymotion, faMagento  } from '@fortawesome/free-brands-svg-icons';
import { faWind, faCode, faDatabase, faCogs, faProjectDiagram, faM, faMagic, faServer ,faPlug,faCloud } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const Skills = () => {
  let softSkills = [
    { icon: <i className="bi bi-lightbulb-fill icon"></i>, para: <p>Problem-solving</p> },
    { icon: <i className="bi bi-alarm icon"></i>, para: <p>Time management</p> },
    { icon: <i className="bi bi-palette-fill icon"></i>, para: <p>Creativity in UI design</p> },
    { icon: <i className="bi bi-microsoft-teams icon"></i>, para: <p>Team collaboration</p> },
    { icon: <i className="bi bi-mortarboard-fill icon"></i>, para: <p>Quick learner</p> },
  ];

  const languages = [
    { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} /> },
    { name: "CSS", icon: <FontAwesomeIcon icon={faCss3Alt} /> },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
    { name: "ReactJS", icon: <FontAwesomeIcon icon={faReact} /> },
 { name: "MongoDB", icon: <FontAwesomeIcon icon={faDatabase} /> },
   { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} /> },
   { name: "Express.js", icon: <FontAwesomeIcon icon={faServer} /> },
  ];

  let tools = [
    { name: "Git", icon: <FontAwesomeIcon icon={faGitAlt} /> },
    { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} /> },
    { name: "VS Code", icon: <FontAwesomeIcon icon={faCode} /> },
    { name: "Figma", icon: <FontAwesomeIcon icon={faFigma} /> },
   { name: "Postman", icon: <FontAwesomeIcon icon={faCloud} /> }
  ];

  let others = [
    { name: "REST APIs", icon: <FontAwesomeIcon icon={faPlug} /> },
    { name: "How JS Works", icon: <FontAwesomeIcon icon={faCogs} /> },
    { name: "Firebase", icon: <FontAwesomeIcon icon={faDatabase} /> },
     { name: "Framer Motion", icon: <FontAwesomeIcon icon={faMagento} /> }
  ];

  return (
    <div className="container-fluid skill text-light" id="skills">
      <motion.div
        className="text-center p-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="fw-bold">My Skills</h1>

        
        <motion.div
          className="container tSkill mt-5 rounded-4 p-5"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-danger mb-4">Technical Skills</h2>
          <div className="row gy-4 justify-content-center align-items-start">
            
           
            <motion.div
              className="col-12 col-md-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3">Languages</h3>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {languages.map((elem, idx) => (
                  <motion.span
                    key={idx}
                    className="skillItem py-2 px-3 rounded-2 ms-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {elem.icon} {elem.name}
                  </motion.span>
                ))}
                <motion.span className="skillItem py-2 px-3 rounded-2" whileHover={{ scale: 1.1 }}>
                  <FontAwesomeIcon icon={faBootstrap} /> BOOTSTRAP
                </motion.span>
                <motion.span className="skillItem py-2 px-3 rounded-2 ms-2" whileHover={{ scale: 1.1 }}>
                  <FontAwesomeIcon icon={faWind} /> TAILWINDCSS
                </motion.span>
              </div>
            </motion.div>

           
            <motion.div
              className="col-12 col-md-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 mt-5 mt-md-0">Tools</h3>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {tools.map((elem, idx) => (
                  <motion.span
                    key={idx}
                    className="skillItem py-2 px-3 rounded-2 ms-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {elem.icon} {elem.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

           
            <motion.div
              className="col-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 mt-5 mt-md-0">Others</h3>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {others.map((elem, idx) => (
                  <motion.span
                    key={idx}
                    className="skillItem py-2 px-3 rounded-2 ms-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {elem.icon} {elem.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        
        <motion.div
          className="container mt-5 rounded-4 tSkill mb-5 p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-danger mb-4">Soft Skills</h3>
          <div className="row gap-4 justify-content-center">
            {softSkills.map((elem, idx) => (
              <motion.div
                className="col-12 col-sm-6 col-lg-3 p-4 softSkillsCard rounded-2"
                style={{ background: "rgb(51, 51, 51)" }}
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  {elem.icon}
                  {elem.para}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;