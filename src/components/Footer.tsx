import '../styles/Footer.css'
import logo from '../assets/logo.png'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-in" data-aos-delay="300">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="JSS Logo" className="footer-logo" />
          <p className="company-name">JSS Colour Coating Pvt (Ltd)</p>
          <p className="company-name-h1">Follow us on</p>

          <div className="social-icons">
            <a
              href="https://web.facebook.com/p/J-S-S-Colour-Coating-100070770136653/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+94778230441"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.tiktok.com/@yourtiktokhandle" // Replace with actual TikTok URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@jsscolourcoatingpvtltd@gmail.com&su=Service%20Inquiry&body=Hi%20JSS%20Team%2C%0A%0AI%20am%20interested%20in%20your%20coating%20services.%20Please%20contact%20me%20back.%0A%0AThanks."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Enquiries</h4>
          <p>
            <FaMapMarkerAlt />{' '}
            <a
              href="https://share.google/k5xqF4XM5BAaqz1gf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              No.19/17, Battiyawattha Road, Karadiyana Rd, Piliyandala.
            </a>
          </p>
          <div className="contact-numbers">
            <span>
              <a href="tel:+94778230441">077 823 0441</a>
            </span>
            <span>
              <a href="tel:+94773136118">077 313 6118</a>
            </span>
          </div>
          <p><FaClock /> Mon – Sat: 8.30am – 5pm</p>
          <p><FaEnvelope /> jsscolourcoatingpvtltd@gmail.com</p>
          <p className="closed">Sunday: Closed</p>

          <div className="map-link">
            <a
              href="https://share.google/k5xqF4XM5BAaqz1gf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JSS Colour Coating Pvt (Ltd). All Rights Reserved.</p>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
