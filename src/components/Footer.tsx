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
              href="https://www.facebook.com/share/1PdW9gSMSc/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/jss.colourcoating/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+94773136118"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.tiktok.com/@jsscolourcoating" // Replace with actual TikTok URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText("jsscolourcoatingpvtltd@gmail.com");
                const tooltip = document.createElement("span");
                tooltip.textContent = "Copied!";
                tooltip.style.position = "absolute";
                tooltip.style.color = "#fff";
                tooltip.style.background = "#1565c0";
                tooltip.style.padding = "4px 10px";
                tooltip.style.borderRadius = "6px";
                tooltip.style.fontSize = "0.9rem";
                tooltip.style.top = e.pageY - 30 + "px";
                tooltip.style.left = e.pageX + "px";
                tooltip.style.transition = "opacity 0.6s ease";
                document.body.appendChild(tooltip);
                setTimeout(() => (tooltip.style.opacity = "0"), 1000);
                setTimeout(() => tooltip.remove(), 1600);
              }}
              className="email-link"
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
              No.19/17, Battiyawattha Road, Karadiyana, Piliyandala.
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
          <p><FaClock /> Mon – Sat: 8.30am – 6pm</p>
          <p><FaEnvelope /> jsscolourcoatingpvtltd@gmail.com</p>
          <p>            {new Date().getDay() === 0 ? (
              <>
                We are <span style={{ color: 'red', fontWeight: '600' }}>Closed</span> today
              </>
            ) : (
              <>
                We are <span style={{ color: 'lightgreen', fontWeight: '600' }}>Open</span> today
              </>
            )}
          </p>

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
