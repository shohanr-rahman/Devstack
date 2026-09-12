const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-logo">&lt;/&gt;</span>
            <span className="gradient-text">Dev Stack</span>
          </div>

          <p>
            Build better applications with the right technology
            stack. Discover, compare, and create.
          </p>

          <div className="social-links">
            <a href="https://github.com" target="_blank">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#home">Features</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#home">Careers</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#home">Security</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>

        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;