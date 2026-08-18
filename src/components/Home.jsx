import React from "react";
import { motion } from "framer-motion";
import image from '../assets/header-img.png'


const Home = () => {
  return (
    <motion.div
      className="container-fluid text-light hero py-5 mt-5"
      style={{ minHeight: "95vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row align-items-center gy-4 text-center text-md-start">
          
          <motion.div
            className="col-12 col-md-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="fs-1 ">
              Hi, I'm <span>Talha Akram</span>
            </h2>
            <h4 className="mt-2">Mern Stack Developer</h4>
            <motion.p
              className="mt-4 fs-5 home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
             I specialize in building visually appealing, responsive, and user-friendly web applications using the MERN stack. I work with modern technologies like MongoDB, Express.js, React, and Node.js to create full-stack web applications with  frontend experiences and backend functionality.

            </motion.p>

           <div className="mt-4 mb-5 mb-md-0 d-flex flex-column flex-md-row">
  <a
    href="https://github.com/talhadev56"
    target="_blank"
    className="mb-3 mb-md-0 me-md-3"
  >
    <motion.button
      className="btn btn-danger py-3 px-4 w-100 w-md-auto"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      View My Work
    </motion.button>
  </a>

  <a
    href="https://wa.me/923287619001?text=Hi%20please%20share%20details"
    target="_blank"
  >
    <motion.button
      className="btn btn-outline-danger py-3 px-4 w-100 w-md-auto"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Get In Touch
    </motion.button>
  </a>
  <a
  className="nav-link active text-light resume"
  href="https://docs.google.com/document/d/1yGaD42SlKiI7vkc5pWLNbg8DV-sRBMmj/edit?usp=drive_link&ouid=110428881762718135605&rtpof=true&sd=true"
  target="_blank"
  rel="noopener noreferrer"
>
   <motion.button
      className="btn btn-danger py-3 px-4 w-100 w-md-auto ms-md-3 mt-3 mt-md-0"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
     See Resume
    </motion.button>
</a>
</div>



          </motion.div>

          
          <motion.div
            className="col-12 col-md-4 text-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
           
            <div className="d-flex justify-content-center">
  <motion.img
    src={ image }
    className="img-fluid img"
    style={{ maxWidth: "350px", borderRadius: "5%" }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ duration: 0.3 }}
  />
</div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
