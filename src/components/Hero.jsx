import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Achieve Your Dream 
            <span className="highlight"> IELTS Band Score</span>
          </h1>
          <p className="hero-subtitle">
            Join thousands of successful students who achieved their target band scores 
            with our expert-designed courses, AI-powered practice tests, and personalized feedback.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">7.5+</span>
              <span className="stat-label">Avg Band Score</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">
              <span className="play-icon">▶</span>
              Watch Demo
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <div className="card-icon">🎯</div>
              <div className="card-text">
                <div className="card-title">Band 8.0</div>
                <div className="card-subtitle">Achievement</div>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">📚</div>
              <div className="card-text">
                <div className="card-title">AI Practice</div>
                <div className="card-subtitle">Tests</div>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">👨‍🏫</div>
              <div className="card-text">
                <div className="card-title">Expert</div>
                <div className="card-subtitle">Tutors</div>
              </div>
            </div>
            <div className="hero-main-graphic">
              <div className="graphic-bg"></div>
              <div className="graphic-content">
                <div className="ielts-logo">IELTS</div>
                <div className="score-display">
                  <div className="score-circle">
                    <span className="score">8.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero