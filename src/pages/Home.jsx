import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Animated Background Stars */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-animation">
            <div className="cosmic-circle"></div>
            <span className="logo-symbol">✨</span>
          </div>
          
          <h1 className="main-title">
            <span className="title-line">Discover Your</span>
            <span className="title-highlight">Cosmic Destiny</span>
          </h1>
          
          <p className="hero-description">
            Unlock the ancient secrets of Vedic Numerology & Astrology
            <br />
            Find your true path through numbers and stars
          </p>

          <div className="cta-buttons">
            <Link to="/numerology" className="cta-btn primary-btn">
              <span className="btn-icon"></span>
              <span className="btn-text">
                <strong>Numerology</strong>
                <small>Discover your numbers</small>
              </span>
            </Link>
            
            <Link to="/astrology" className="cta-btn secondary-btn">
              <span className="btn-icon">⭐</span>
              <span className="btn-text">
                <strong>Astrology</strong>
                <small>Know your Rashi</small>
              </span>
            </Link>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">What You'll Discover</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Mulank & Bhagyank</h3>
            <p>Calculate your Birth Number and Destiny Number to understand your core personality and life path</p>
            <div className="feature-tags">
              <span className="tag">Free</span>
              <span className="tag">Instant</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Moon Sign (Rashi)</h3>
            <p>Discover your Vedic moon sign based on birth time and location for accurate astrological insights</p>
            <div className="feature-tags">
              <span className="tag">Vedic</span>
              <span className="tag">Accurate</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Detailed Guidance</h3>
            <p>Get comprehensive personality analysis, career guidance, health tips, and life recommendations</p>
            <div className="feature-tags">
              <span className="tag">Detailed</span>
              <span className="tag">Actionable</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Remedies & Solutions</h3>
            <p>Learn spiritual practices, lucky colors, gemstones, and mantras specific to your numbers</p>
            <div className="feature-tags">
              <span className="tag">Traditional</span>
              <span className="tag">Powerful</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Enter Your Details</h3>
              <p>Provide your birth date, time, and location</p>
            </div>
          </div>

          <div className="step-connector">→</div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Get Instant Results</h3>
              <p>Our algorithms calculate your cosmic profile</p>
            </div>
          </div>

          <div className="step-connector">→</div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Explore Insights</h3>
              <p>Read detailed analysis and guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-number">9</div>
          <div className="stat-label">Mulanks Covered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">12</div>
          <div className="stat-label">Rashis Analyzed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Free to Use</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">∞</div>
          <div className="stat-label">Possibilities</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to Discover Your Path?</h2>
          <p>Begin your journey to self-discovery today</p>
          <div className="cta-buttons">
            <Link to="/numerology" className="cta-btn primary-btn large">
              Start with Numerology
            </Link>
            <Link to="/astrology" className="cta-btn secondary-btn large">
              Start with Astrology
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>✨ Built with ancient wisdom and modern technology ✨</p>
        <p className="footer-note">For educational and entertainment purposes</p>
      </footer>
    </div>
  );
};

export default Home;
