import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>IELTS Elite</h2>
          <span className="logo-accent">Institute</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#courses" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Courses
          </a>
          <a href="#practice" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Practice Tests
          </a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <button className="nav-btn">Get Started</button>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar