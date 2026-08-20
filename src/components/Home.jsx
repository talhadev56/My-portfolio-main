import { motion as Motion } from "framer-motion";
import portrait from "../assets/header-img.png";

const RESUME_PDF =
  "https://docs.google.com/document/d/1yGaD42SlKiI7vkc5pWLNbg8DV-sRBMmj/export?format=pdf";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center gy-5">
          <Motion.div
            className="col-lg-7 text-center text-lg-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-kicker mb-3">MERN stack developer</p>
            <h1 className="hero-title display-font mb-3">
              Hi, I&apos;m <span>Talha Akram</span>
            </h1>
            <p className="hero-copy mx-auto mx-lg-0">
              I build responsive, user-focused web applications with React and
              the MERN stack — polished interfaces on the frontend, APIs and
              data on the backend.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
              <a className="btn btn-accent" href="#projects">
                View my work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
              <a
                className="btn btn-ghost"
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download resume
              </a>
            </div>
          </Motion.div>

          <Motion.div
            className="col-lg-5 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src={portrait}
              alt="Portrait of Talha Akram"
              className="hero-portrait img-fluid"
              width="420"
              height="420"
            />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
