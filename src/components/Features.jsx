import './Features.css'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '🗣️',
      title: 'Speaking Practice',
      description: 'AI-powered speaking assessments with real-time feedback and band score predictions.',
      features: ['Real-time pronunciation feedback', 'Fluency analysis', 'Vocabulary enhancement'],
      color: 'blue'
    },
    {
      id: 2,
      icon: '📝',
      title: 'Mock Tests',
      description: 'Complete IELTS practice tests with detailed analytics and performance tracking.',
      features: ['Full-length practice tests', 'Instant scoring', 'Detailed performance reports'],
      color: 'green'
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AI Band Score Prediction',
      description: 'Advanced AI algorithms that accurately predict your IELTS band scores.',
      features: ['Accurate band prediction', 'Weakness identification', 'Improvement suggestions'],
      color: 'purple'
    },
    {
      id: 4,
      icon: '👥',
      title: 'Expert Tutoring',
      description: 'One-on-one sessions with certified IELTS instructors for personalized guidance.',
      features: ['Certified instructors', 'Personalized study plans', 'Flexible scheduling'],
      color: 'orange'
    }
  ]

  return (
    <section className="features" id="courses">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Why Choose IELTS Elite?</h2>
          <p className="section-subtitle">
            Our comprehensive platform combines cutting-edge AI technology with expert instruction 
            to give you the best preparation for your IELTS exam.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className={`feature-card ${feature.color}`}>
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-list">
                  {feature.features.map((item, index) => (
                    <li key={index} className="feature-item">
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="feature-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <div className="cta-content">
            <h3>Ready to Start Your IELTS Journey?</h3>
            <p>Join thousands of successful students and achieve your target band score today.</p>
            <button className="cta-btn">Get Started Free</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features