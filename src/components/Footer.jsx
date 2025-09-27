import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <h3>IELTS Elite</h3>
              <span className="logo-accent">Institute</span>
            </div>
            <p className="footer-description">
              Empowering students worldwide to achieve their IELTS dreams with cutting-edge AI technology 
              and expert instruction.
            </p>
            <div className="social-links">
              <a href="#" className="social-link facebook">
                <span>📘</span>
              </a>
              <a href="#" className="social-link twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link linkedin">
                <span>💼</span>
              </a>
              <a href="#" className="social-link youtube">
                <span>📺</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Courses</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Academic IELTS</a></li>
              <li><a href="#" className="footer-link">General Training</a></li>
              <li><a href="#" className="footer-link">Speaking Practice</a></li>
              <li><a href="#" className="footer-link">Writing Intensive</a></li>
              <li><a href="#" className="footer-link">Mock Tests</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Practice Tests</a></li>
              <li><a href="#" className="footer-link">Study Materials</a></li>
              <li><a href="#" className="footer-link">Band Score Calculator</a></li>
              <li><a href="#" className="footer-link">Study Tips</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Live Chat</a></li>
              <li><a href="#" className="footer-link">Book a Session</a></li>
              <li><a href="#" className="footer-link">Technical Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section contact-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-details">
                  <span>123 Education Street</span>
                  <span>Learning City, LC 12345</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <span>+1 (555) 123-4567</span>
                  <span>Mon-Fri 9AM-6PM</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-details">
                  <span>info@ieltselite.com</span>
                  <span>support@ieltselite.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Stay Updated with IELTS Tips & News</h4>
            <p>Get weekly study tips, practice materials, and exam updates directly to your inbox.</p>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 IELTS Elite Institute. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <a href="#" className="bottom-link">Terms of Service</a>
              <a href="#" className="bottom-link">Cookie Policy</a>
              <a href="#" className="bottom-link">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer