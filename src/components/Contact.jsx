import { useState } from "react";
import { motion as Motion } from "framer-motion";

const EMAIL = "info.talha56@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState("");
  const [sending, setSending] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setResult("Sending…");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_API_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent. I’ll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
        event.target.reset();
      } else {
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setResult("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied("Email copied");
    } catch {
      setCopied("Could not copy — select the address instead");
    }
    window.setTimeout(() => setCopied(""), 2200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <Motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-kicker">Contact</p>
          <h2 className="display-font fw-bold">Let’s work together</h2>
        </Motion.div>

        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-lg-5">
            <p className="text-secondary mb-4">
              Open to internships, freelance work, and full-stack projects.
              If you have an idea or a role that needs a MERN developer, send a
              note.
            </p>

            <div className="contact-row mb-3">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-telephone-inbound-fill text-danger fs-4" aria-hidden="true"></i>
                <div>
                  <div className="small text-secondary">Phone</div>
                  <a href="tel:+923287619001">+92 328 7619001</a>
                </div>
              </div>
            </div>

            <div className="contact-row mb-3">
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-envelope-at-fill text-danger fs-4" aria-hidden="true"></i>
                  <div>
                    <div className="small text-secondary">Email</div>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-ghost py-2 px-3"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  <i className="bi bi-clipboard-check" aria-hidden="true"></i>
                </button>
              </div>
              <p className="toast-note mb-0 mt-2" role="status">
                {copied}
              </p>
            </div>

            <div className="d-flex gap-3 mt-4">
              <a
                className="social-link"
                href="https://www.linkedin.com/in/talha-akram-aa06a433a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                className="social-link"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email"
              >
                <i className="bi bi-envelope-arrow-down"></i>
              </a>
              <a
                className="social-link"
                href="https://github.com/talhadev56"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                className="social-link"
                href="https://wa.me/923287619001?text=Hello%20I%20am%20interested"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-panel p-4 p-md-5">
              <form onSubmit={onSubmit}>
                <input
                  type="checkbox"
                  name="botcheck"
                  className="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <label className="mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={onChange}
                />

                <label className="mt-3 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={onChange}
                />

                <label className="mt-3 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={onChange}
                />

                <label className="mt-3 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={onChange}
                />

                <button className="btn btn-accent w-100 mt-4" type="submit" disabled={sending}>
                  {sending ? "Sending…" : "Send message"}
                </button>
              </form>
              <p className="text-center toast-note mt-3 mb-0" role="status">
                {result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
