import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  let card = [
     {
      // cardImg:
      //   "https://yt3.googleusercontent.com/t8z86Svc4diX-k6VHCZ7AY0EFgVin91qLZigPwJLnavVaB0YPa0etWa-c7bG1BUEcbB4U4im=s900-c-k-c0x00ffffff-no-rj",
      cardTitle: "SHERIYANS WEBSITE",
      cardDetail:
        "it is clone of sheyians coding school.SCS is school that offer different programing related services includes courses and phyical lectures.",
      cardBtn1: "HTML",
      cardBtn2: "CSS",
      cardBtn3: "JAVASCRIPT",
      cardBtn4: "REACT",
      cardLink:"https://sheriyans-nu.vercel.app/",
      cardLinked :"open project",
      cardDetailsHeading: "Challenges & Solutions:",
      cardDetailsPara:
        "A responsive clone of Sheriyans Coding School website featuring modern design, animations, and interactive learning sections.",
    },
    {
      // cardImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLbAP8AxKYSIWj94eSMGGqPH_in0EDzzO4A&s",
      cardTitle: "CURREN Watches",
      cardDetail:
        "A modern website inspired by leading curren watch brands, showcasing collection, pricing highlights, and clean, premium user experience.",
      cardBtn1: "HTML",
      cardBtn2: "CSS",
      cardBtn3: "JAVASCRIPT",
      cardBtn4: "REACT",
      cardLink : "https://watchbrand-eight.vercel.app/",
      cardLinked :"open project",
      cardDetailsHeading: "Challenges & Solutions:",
      cardDetailsPara:
        "Maintained luxury aesthetics with responsive layouts,optimized images, and clear navigation to ensure fast performance across all devices.",
    },
   
    {
      // cardImg:
      //   "https://cdn.prod.website-files.com/64da807a9aa000087e97b92d/64edcb8e507fed6867f32081_604bfcc42bdd86c1e410af59_Template-20Thumbnail.jpeg",
      cardTitle: "CLOTING BRAND",
      cardDetail:
        "A modern website designed to present fashion and fragrance brands with smooth navigation, rich visuals and premium user experience.",
      cardBtn1: "HTML",
      cardBtn2: "CSS",
      cardBtn3: "JAVASCRIPT",
      cardBtn4: "REACT",
      cardLink:"https://clotingbrand.vercel.app/",
      cardLinked :"open project",
      cardDetailsHeading: "Challenges & Solutions:",
      cardDetailsPara:
        "Optimized images,responsive layout,caching techniques, and clear navigation ensure speed, scalability, and improved overall user experience.",
    },
    {
      cardImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPAzDsyf6GAihPv3MNLoXHppI49W_YmZGZg&s",
      cardTitle: "TODO APP",
      cardDetail:
        "A sleek to-do list clone enabling task creation, updates, deletion, and progress tracking with responsive design",
      cardBtn1: "HTML",
      cardBtn2: "CSS",
      cardBtn3: "JAVASCRIPT",
      cardBtn4: "REACT",
      cardLink : "https://tododo-gules.vercel.app/",
      cardLinked :"open project",
      cardDetailsHeading: "Challenges & Solutions:",
      cardDetailsPara:
        "A sleek to-do list clone enabling task creation, updates, deletion, and progress tracking with responsive design",
    },
    
  ];

  return (
    <motion.div
      className="container-fluid bg-black text-light py-5"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        
        <motion.h2
          className="text-center fw-bold mb-5 display-5"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
            Projects
        </motion.h2>

       
        <div className="row g-4 justify-content-center">
          {card.map((elem, idx) => (
            <motion.div
              className="col-lg-5 col-md-6 col-12"
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden bg-dark text-light">
               
                {/* <motion.img
                  src={elem.cardImg}
                  className="card-img-top"
                  alt="img"
                  style={{ height: "180px", objectFit: "cover" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                /> */}

                
                <div className="card-body p-4 m-4">
                  <h3 className="fw-bold  text-center">{elem.cardTitle}</h3>
                  <p className="mt-2 text-secondary">{elem.cardDetail}</p>

                 
                  <div className="d-flex flex-wrap gap-2 ">
                    {[elem.cardBtn1, elem.cardBtn2, elem.cardBtn3, elem.cardBtn4].map(
                      (btn, i) => (
                        <motion.button
                          key={i}
                          className="btn btn-sm btn-outline-danger rounded-pill px-3 fw-semibold"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {btn}
                        </motion.button>
                      )
                    )}
                  </div>

                 
                  <motion.div
                    className="d-flex justify-content-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href={elem.cardLink} target="_blank" className="btn btn-danger mt-4 w-100 rounded-pill fw-bold py-2">
                      {elem.cardLinked}
                    </a>
                  </motion.div>

                  <p className="text-danger mt-4 fw-bold">{elem.cardDetailsHeading}</p>
                  <p className="text-light">{elem.cardDetailsPara}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
