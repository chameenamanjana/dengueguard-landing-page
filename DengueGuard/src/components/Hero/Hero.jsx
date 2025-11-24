import React from 'react';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">CS-109 Project Phase 1</span>
            <h1>
              Proactive Defense.<br />
              <span>Smart Prediction.</span>
            </h1>
            <p>
              Don't wait for the outbreak. Our AI-driven heatmap analyzes weather
              patterns and community reports to predict dengue risks up to 14 days
              in advance.
            </p>
            
            <div className="hero-stats">
              <div className="avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img src="https://images.unsplash.com/photo-1521119989659-a83eee488058?auto=format&fit=crop&w=64&h=64" alt="User" />
              </div>
              <div className="rating-text">
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span style={{color: 'var(--text-main)', fontWeight: 'bold', marginLeft: '6px'}}>4.9</span>
                </div>
                <div className="rating-label">
                  Trusted by 50+ Communities
                </div>
                <div className="rating-sub">
                  Used by Ministry of Health
                </div>
              </div>
            </div>

          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop"
                alt="Smart City Data Analysis"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
