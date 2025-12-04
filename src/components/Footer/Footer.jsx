import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column brand-column">
            <div className="brand-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="brand-icon"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              <span>
                Dengue<span className="highlight-blue">Guard</span>
              </span>
            </div>
            <p className="brand-description">
              Transforming dengue mitigation from a reactive to a proactive
              approach using AI and community-driven data.
            </p>
            <div className="brand-badge-wrapper">
              <span className="brand-badge">Project CS-109</span>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Platform</h3>
            <ul className="footer-links">
              <li>
                <a href="#heatmap" className="footer-link">
                  Live Heatmap
                </a>
              </li>
              <li>
                <a href="#report" className="footer-link">
                  Report Incident
                </a>
              </li>
              <li>
                <a href="#chatbot" className="footer-link">
                  AI Assistant
                </a>
              </li>
              <li>
                <a href="#moh-login" className="footer-link">
                  MOH Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="#prevention" className="footer-link">
                  Prevention Tips
                </a>
              </li>
              <li>
                <a href="#education" className="footer-link">
                  Educational Videos
                </a>
              </li>
              <li>
                <a
                  href="https://www.dengue.health.gov.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  National Dengue Unit
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Team</h3>
            <ul className="footer-contact-list">
              <li>
                <svg
                  className="contact-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>contact@dengueguard.lk</span>
              </li>
              <li>
                <svg
                  className="contact-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
                <span>
                  Informatics Institute of Technology (IIT)
                  <br />
                  Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 DengueGuard (Group CS-109). All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy" className="footer-link">
              Privacy Policy
            </a>
            <a href="#terms" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
