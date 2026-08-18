import React from "react";
import { motion } from "framer-motion";

const About = () => {
  let boxes = [
    {
      heading: "CS Student",
      para: "Islamia University Of Bahawalpur",
    },
    {
      heading: "Mern Stack",
      para: "Developer",
    },
    {
      heading: "Problem",
      para: "Solver",
    },
  ];

  return (
    <motion.div
      className="container-fluid about text-light p-5"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="pt-5 fs-1 fw-bold mb-5">About Me</h1>
          <motion.p
            className="aboutPara fs-5 mb-4 mx-auto"
            style={{ maxWidth: "800px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
          Hi! I'm Talha Akram,MERN Stack Developer currently studying Computer Science at Islamia University of Bahawalpur. I specialize in building responsive, user-friendly, and full-stack web applications using modern technologies like MongoDB, Express.js, ReactJS, and Node.js. I enjoy creating seamless frontend experiences while developing reliable backend functionality and RESTful APIs.
          </motion.p>
          <motion.p
            className="aboutPara fs-5 mx-auto"
            style={{ maxWidth: "800px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           I love solving real-world problems through code and continuously improving my skills to build scalable, efficient, and modern web applications.
          </motion.p>
        </motion.div>

       
        <div className="row mt-5 gy-4 text-center justify-content-center">
          {boxes.map((elem, idx) => (
            <motion.div
              className="col-12 col-sm-6 col-md-4 p-3 px-2 md:px-0"
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
            >
              <motion.div
                className="box rounded-5 p-4 h-100 shadow-lg"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-danger mt-2">{elem.heading}</h3>
                <p>{elem.para}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
