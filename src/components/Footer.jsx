import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      className="container-fluid tSkill text-light p-5 text-center"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.p 
        className="fs-6 mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        © 2025 Talha Akram. All rights reserved
       
      </motion.p>
    </motion.div>
  );
};

export default Footer;
