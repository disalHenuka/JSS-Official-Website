import '../styles/Contact.css'
import { useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';  

const Contact = () => {
  useEffect(() => {
  document.body.classList.add('services-page');
  return () => {
    document.body.classList.remove('services-page');
  };
}, []);


  return (
    <div className="contact-page">
      {/* === HERO SECTION === */}
      <div className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content" data-aos="fade-up">
          <h1>Get in Touch with Us</h1>
          <p>
            <p>Whether it's industrial, commercial, or custom our powder 
              coating solutions are made to last. Contact us today.</p>
          </p>
        </div>
      </div>

      {/* === GRID SECTION === */}
      <div className="contact-grid">
        {/* LEFT TEXT INFO */}
        <div className="contact-info">
          <div className="contact-section">
            <h4>ADDRESS</h4>
            <p>
              No.19/17, Battiaywattha Road,<br />
              Karadiyana Rd, Piliyandala.
            </p>
          </div>

          <div className="contact-section">
            <h4>PHONE</h4>
            <p>077 823 0441<br />077 222 7702</p>
          </div>

          <div className="contact-section">
            <h4>E-MAIL</h4>
            <p>jsscolourcoatingpvtltd@gmail.com</p>
          </div>

          <div className="contact-social-icons">
            <a href="https://web.facebook.com/p/J-S-S-Colour-Coating-100070770136653/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+94769967702" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="mailto:info@jsscolourcoatingpvtltd@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <div className="contact-quote">
            <p>
              <em>"Coming together is a beginning; keeping together is progress; working together is success."</em>
              <br />
              — <strong>Henry Ford</strong>
            </p>
          </div>
        </div>
        

        {/* RIGHT FORM */}
        <div className="contact-form-box">
          <form
            action="https://formsubmit.co/jsscolourcoatingpvtltd@gmail.com"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <label>Name*</label>
            <input type="text" name="Name" required />

            <label>Email Address*</label>
            <input type="email" name="Email" required />

            <label>Phone</label>
            <input type="tel" name="Phone" />

            <label>Company Name*</label>
            <input type="text" name="Company" required />

            <label>Message</label>
            <textarea name="Message" rows={2} />

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      {/* === MAP === */}
      <div className="map-wrapper" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.8315562077207!2d79.90623050273955!3d6.8107692022195225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245dc6df2d305%3A0x3c0f137701a8b03f!2sJss%20colour%20coating%20pvt%20ltd!5e0!3m2!1sen!2slk!4v1758713202271!5m2!1sen!2slk" 
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="JSS Colour Coating Pvt Ltd Map"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
