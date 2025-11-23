import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-blue-500"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              <span>
                Dengue<span className="text-blue-500">Guard</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transforming dengue mitigation from a reactive to a proactive
              approach using AI and community-driven data.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Project CS-109
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#heatmap"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span>Live Heatmap</span>
                </a>
              </li>
              <li>
                <a
                  href="#report"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Report Incident
                </a>
              </li>
              <li>
                <a
                  href="#chatbot"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  AI Assistant
                </a>
              </li>
              <li>
                <a
                  href="#moh-login"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  MOH Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#prevention"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Prevention Tips
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Educational Videos
                </a>
              </li>
              <li>
                <a
                  href="https://www.dengue.health.gov.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  National Dengue Unit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Team</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 shrink-0 mt-0.5"
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
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 shrink-0 mt-0.5"
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

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2025 DengueGuard (Group CS-109). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a
              href="#privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
