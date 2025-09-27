import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'Canada',
      score: '8.5',
      image: '👩‍💼',
      text: 'IELTS Elite helped me achieve my dream band score! The AI practice tests were incredibly accurate, and the speaking practice feature gave me the confidence I needed.',
      course: 'Academic IELTS Preparation'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      country: 'Egypt',
      score: '7.0',
      image: '👨‍💻',
      text: 'The personalized feedback from expert tutors was game-changing. I improved from 6.0 to 7.0 in just 2 months with their structured approach.',
      course: 'General Training IELTS'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      country: 'Spain',
      score: '8.0',
      image: '👩‍🎓',
      text: 'Amazing platform! The mock tests felt exactly like the real exam. I was well-prepared and confident on test day. Highly recommend to anyone serious about IELTS.',
      course: 'Speaking Intensive Course'
    }
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Join thousands of successful students who achieved their target band scores with IELTS Elite
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="student-info">
                  <div className="student-avatar">
                    <span>{testimonial.image}</span>
                  </div>
                  <div className="student-details">
                    <h4 className="student-name">{testimonial.name}</h4>
                    <p className="student-country">{testimonial.country}</p>
                    <span className="student-course">{testimonial.course}</span>
                  </div>
                </div>
                <div className="band-score">
                  <div className="score-circle">
                    <span className="score-number">{testimonial.score}</span>
                  </div>
                  <span className="score-label">Band Score</span>
                </div>
              </div>
              
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              
              <div className="testimonial-footer">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <span className="verified">✓ Verified Student</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Happy Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Success Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7.5+</span>
            <span className="stat-label">Average Band Score</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials