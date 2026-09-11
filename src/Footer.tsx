import logo from './assets/logo-text.png'

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Dev Stack" />
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-links" id="projects">
          <h4>Product</h4>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="footer-links" id="contact">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Careers</a>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div>
          <a href="#privacy" id="privacy">Privacy</a>
          <a href="#terms" id="terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}
