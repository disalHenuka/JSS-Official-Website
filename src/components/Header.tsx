import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo1.png'
import '../styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  // Check if on home page
  const isHomePage = location.pathname === '/'

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        {!isHomePage && (
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="JSS Logo" className={`logo ${isScrolled ? 'scrolled' : ''}`} />
          </NavLink>
        )}
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul onClick={closeMenu}>
          <li>
            <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
