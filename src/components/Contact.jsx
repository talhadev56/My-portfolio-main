import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textArea, setTextArea] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    try {
      const formData = new FormData(event.target);
        
      formData.append("access_key", import.meta.env.VITE_API_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(
          `Network response was not ok: ${response.status} ${text}`
        );
      }

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");

        setName("");
        setEmail("");
        setSubject("");
        setTextArea("");

        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setResult("An error occurred. Please try again.");
    }
  };

  const copy = () => {
    navigator.clipboard.writeText("info.talha56@gmail.com");
    alert("Email copied!");
  };

  return (
    <div className="container-fluid bg-black text-light overflow-hidden" id="contact">
      <motion.h1
        className="text-center p-5"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h1>

      <div className="row justify-content-evenly">
        <motion.div
          className="col-12 col-md-6 col-lg-5 ms-md-0 ms-lg-5 mb-4 mb-md-0"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-danger p-3 text-center">Let's Connect</h2>
          <p className="mb-5 text-center">
            I'm always open to discussing new opportunities, freelance work, and full-stack projects. Whether you have an idea for a web application or need help building a MERN stack project,Feel free to reach out!
          </p>

          <motion.div
            className="rounded-3 p-4 bg-dark w-100 mb-3 contactBox"
            whileHover={{ scale: 1.05 }}
          >
            <div className="d-flex">
              <div>
                <i className="bi bi-telephone-inbound-fill text-danger fs-4"></i>
              </div>
              <div className="ms-4">
                Phone <span className="d-block">+92-3287619001</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3 p-4 bg-dark w-100 mb-3 position-relative contactBox"
            whileHover={{ scale: 1.05 }}
          >
            <div className="d-flex">
              <div>
                <i className="bi bi-envelope-at-fill text-danger fs-4"></i>
              </div>
              <div className="ms-4 d-flex">
                <p className="mb-0">
                  Email{" "}
                  <span className="d-block">info.talha56@gmail.com</span>
                </p>
              </div>
              <div className="position-absolute end-0 me-5 cursor-pointer">
                <i className="bi bi-clipboard-check fs-4" onClick={copy}></i>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-5 d-flex justify-content-center gap-4 flex-wrap mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/talha-akram-aa06a433a"
              target="_blank"
            >
              <i className="bi bi-linkedin icon cursor-pointer "></i>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info.talha56@gmail.com"
              target="_blank"
            >
              <i className="bi bi-envelope-arrow-down icon cursor-pointer"></i>
            </a>
            <a href="https://github.com/talhadev56" target="_blank">
              <i className="bi bi-github icon cursor-pointer"></i>
            </a>
            <a
              href="https://wa.me/923287619001?text=Hello%20I%20am%20interested"
              target="_blank"
            >
              <i className="bi bi-whatsapp icon cursor-pointer"></i>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="col-12 col-md-6 col-lg-5 form-color p-5 mb-5 rounded-4"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              className="p-3 rounded-2 w-100 mt-2 border-0"
              autoComplete="off"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className="mt-4" htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 rounded-2 w-100 mt-2 border-0"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="mt-4" htmlFor="subject">
              Subject
            </label>
            <br />
            <input
              type="text"
              id="subject"
              name="subject"
              className="p-3 rounded-2 w-100 mt-2 border-0"
              autoComplete="off"
              required
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <label className="mt-4" htmlFor="msg">
              Message
            </label>
            <br />
            <textarea
              className="mb-3 w-100 p-3 rounded-2 border-0"
              id="msg"
              name="message"
              rows="4"
              value={textArea}
              onChange={(e) => {
                setTextArea(e.target.value);
              }}
            ></textarea>
            <motion.button
              className="btn btn-danger py-2 px-4 mt-3 w-100"
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
         <div className="text-center mt-3">
  <span>{result}</span>
</div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
