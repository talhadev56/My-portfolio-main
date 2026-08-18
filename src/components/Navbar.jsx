import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const Navbar = () => {
  return (
    <>
      <motion.nav
        className="navbar navbar-expand-lg bg-black p-3 fixed-top"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
        
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              className="navbar-brand text-danger fw-bolder ms-5 logo fs-4"
              to="/"
            >
              TALHA AKRAM
            </Link>
          </motion.div>

         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

  
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
              <motion.li
                className="nav-item"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link className="nav-link active text-light" to="/">
                  Home
                </Link>
              </motion.li>

              <motion.li
                className="nav-item"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link className="nav-link active text-light" to="/about">
                  About
                </Link>
              </motion.li>

              <motion.li
                className="nav-item"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link className="nav-link active text-light" to="/project">
                  Projects
                </Link>
              </motion.li>

              <motion.li
                className="nav-item"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Link className="nav-link active text-light" to="/skills">
                  Skills
                </Link>
              </motion.li>

              <motion.li
                className="nav-item"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Link
                  className="nav-link active text-light me-5"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </motion.li>
              
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
