import '../styles/Contact.css'
import { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.classList.add('services-page')
    return () => document.body.classList.remove('services-page')
  }, [])

  return (
    <div className="contact-page">
      {/* === HERO SECTION === */}
      <div className="contact-hero">
        <div className="contact-hero-overlay" />
        <div
          className="contact-hero-content"
          {...(isMobile ? { 'data-aos': 'fade-up' } : {})} // mobile: hero only
        >
          <h1>Get in Touch with Us</h1>
          <p>
            Whether it's industrial, commercial, or custom, our powder coating solutions are made
            to last. Contact us today.
          </p>
        </div>
      </div>

      {/* === GRID SECTION === */}
      <div {...(!isMobile ? { 'data-aos': 'fade-up', 'data-aos-delay': '300' } : {})}>
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
              <p>077 823 0441<br />077 313 6118</p>
            </div>

            <div className="contact-section">
              <h4>E-MAIL</h4>
              <p>jsscolourcoatingpvtltd@gmail.com</p>
            </div>

            <div className="contact-section">
              <h4>Contact us on</h4>
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

                <a href="https://www.tiktok.com/@yourtiktokhandle" target="_blank" rel="noopener noreferrer">
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

              <label>Name<span className="required-star">*</span></label>
              <input type="text" name="Name" required />

              <label>Email Address<span className="required-star">*</span></label>
              <input type="email" name="Email" required />

              <label>Phone<span className="required-star">*</span></label>
              <input type="tel" name="Phone" required/>

              <label>Company Name</label>
              <input type="text" name="Company" required />

              <label>Message</label>
              <textarea name="Message" rows={2} />

              <button type="submit">SUBMIT</button>
            </form>
            <p className="form-note">
              <em>
                If you’re looking for a quotation on any product, feel free to submit the form above.
                Our team will get back to you as quickly as possible with the necessary details.
              </em>
          </p>
          </div>
        </div>

        {/* === MAP === */}
        <div
          className="map-wrapper"
          {...(!isMobile ? { 'data-aos': 'fade-up', 'data-aos-delay': '500' } : {})}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.8315562077207!2d79.90623050273955!3d6.8107692022195225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245dc6df2d305%3A0x3c0f137701a8b03f!2sJss%20colour%20coating%20pvt%20ltd!5e0!3m2!1sen!2slk!4v1758713202271!5m2!1sen!2slk"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="JSS Colour Coating Pvt Ltd Map"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
