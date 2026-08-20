import { motion as Motion } from "framer-motion";

const highlights = [
  {
    heading: "CS student",
    para: "Islamia University of Bahawalpur",
  },
  {
    heading: "MERN stack",
    para: "MongoDB, Express, React, Node.js",
  },
  {
    heading: "Product mindset",
    para: "Responsive UI, clean APIs, real problems",
  },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <Motion.div
          className="text-center mx-auto mb-5"
          style={{ maxWidth: 760 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">About</p>
          <h2 className="display-font fw-bold mb-3">A bit about me</h2>
          <p className="text-secondary fs-5 mb-3">
            I&apos;m Talha Akram, a Computer Science student and MERN stack
            developer. I design and build responsive, user-friendly web apps
            with React, and I connect them to Node.js, Express, and MongoDB
            when the product needs a real backend.
          </p>
          <p className="text-secondary fs-5 mb-0">
            I like shipping work that looks considered, loads fast, and solves
            a concrete problem — then iterating until it feels simple to use.
          </p>
        </Motion.div>

        <div className="row g-4 justify-content-center">
          {highlights.map((item, idx) => (
            <Motion.div
              className="col-md-4"
              key={item.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <article className="stat-card text-center">
                <h3 className="h5 text-danger mb-2">{item.heading}</h3>
                <p className="text-secondary mb-0">{item.para}</p>
              </article>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
