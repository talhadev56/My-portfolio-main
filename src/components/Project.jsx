import { motion as Motion } from "framer-motion";
import sheriyans from "../assets/projects/sheriyans.png";
import watches from "../assets/projects/watches.png";
import clothing from "../assets/projects/clothing.png";
import todo from "../assets/projects/todo.png";

const projects = [
  {
    title: "Sheriyans Coding School",
    image: sheriyans,
    summary:
      "A responsive clone of the Sheriyans Coding School site, with a modern layout, motion, and course-focused sections.",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://sheriyans-nu.vercel.app/",
    detail:
      "Matched a dense marketing layout across breakpoints and kept animations from hurting readability or tap targets.",
  },
  {
    title: "Curren Watches",
    image: watches,
    summary:
      "A premium watch storefront with collection highlights, pricing, and a clean luxury-inspired browsing experience.",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://watchbrand-eight.vercel.app/",
    detail:
      "Balanced large product imagery with fast load times and a navigation structure that stays clear on mobile.",
  },
  {
    title: "Clothing Brand",
    image: clothing,
    summary:
      "A fashion brand site built for rich visuals, smooth browsing, and a premium first impression.",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "https://clotingbrand.vercel.app/",
    detail:
      "Used responsive image treatment and a tight layout system so the editorial look still feels fast on small screens.",
  },
  {
    title: "Todo App",
    image: todo,
    summary:
      "A compact task app for creating, updating, completing, and tracking items with a dark, focused UI.",
    tags: ["React", "JavaScript"],
    liveUrl: "https://tododo-gules.vercel.app/",
    detail:
      "Kept state updates predictable and the interface uncluttered so adding and clearing tasks stays instant.",
  },
];

const Project = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Work</p>
          <h2 className="display-font fw-bold">Selected projects</h2>
          <p className="text-secondary mt-2 mb-0">
            Frontend product work in React. Live demos below.
          </p>
        </Motion.div>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <Motion.div
              className="col-lg-6"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <article className="project-card">
                <img src={project.image} alt={`Preview of ${project.title}`} />
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h3 className="h4 fw-bold mb-2">{project.title}</h3>
                  <p className="text-secondary">{project.summary}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="small text-secondary mb-4">{project.detail}</p>
                  <a
                    className="btn btn-accent mt-auto align-self-start"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open live site
                  </a>
                </div>
              </article>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
