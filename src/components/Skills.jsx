import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGitAlt,
  faGithub,
  faFigma,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faWind,
  faCode,
  faDatabase,
  faCogs,
  faServer,
  faPlug,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { motion as Motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
      { name: "JavaScript", icon: faJs },
      { name: "React", icon: faReact },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "Tailwind CSS", icon: faWind },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Express.js", icon: faServer },
      { name: "MongoDB", icon: faDatabase },
      { name: "REST APIs", icon: faPlug },
      { name: "Firebase", icon: faDatabase },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faGithub },
      { name: "VS Code", icon: faCode },
      { name: "Figma", icon: faFigma },
      { name: "Postman", icon: faCloud },
      { name: "Framer Motion", icon: faCogs },
    ],
  },
];

const softSkills = [
  { icon: "bi-lightbulb-fill", label: "Problem solving" },
  { icon: "bi-alarm", label: "Time management" },
  { icon: "bi-palette-fill", label: "UI craft" },
  { icon: "bi-people-fill", label: "Collaboration" },
  { icon: "bi-mortarboard-fill", label: "Fast learner" },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
          <Motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Skills</p>
          <h2 className="display-font fw-bold">What I work with</h2>
        </Motion.div>

        <div className="surface-card p-4 p-md-5 mb-4">
          <div className="row g-5">
            {groups.map((group) => (
              <div className="col-md-4" key={group.title}>
                <h3 className="h5 text-danger mb-3">{group.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span className="skill-chip" key={item.name}>
                      <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-4 p-md-5">
          <h3 className="h5 text-danger mb-4 text-center">Soft skills</h3>
          <div className="row g-3">
            {softSkills.map((skill) => (
              <div className="col-6 col-lg" key={skill.label}>
                <div className="soft-card text-center">
                  <i className={`bi ${skill.icon} icon-accent`} aria-hidden="true"></i>
                  <p className="mb-0 mt-2">{skill.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
