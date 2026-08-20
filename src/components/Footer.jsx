const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0 text-secondary small">
          © {year} Talha Akram. All rights reserved.
        </p>
        <a className="small text-secondary" href="#home">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
