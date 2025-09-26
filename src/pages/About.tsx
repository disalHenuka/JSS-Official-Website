import { useEffect, useState } from 'react'
import '../styles/About.css'
import aboutBg from '../assets/about-bg.jpg'
import { FaUsers, FaShieldAlt } from 'react-icons/fa'
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    document.body.classList.add('services-page')
    return () => {
      document.body.classList.remove('services-page')
    }
  }, [])

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
        data-aos="fade-in"
      >
        <h1 className="about-title" data-aos="fade-up">
          WHY CHOOSE US
        </h1>
      </section>

      {/* Info + Stats Section */}
      <section className="about-content">
        {/* Left: Description Box */}
        <div className="about-box" data-aos="fade-up">
          <p>
            Established since 2016, <strong>JSS Colour Coating Pvt (Ltd)</strong> is a trusted Sri Lankan company specializing in powder coating and surface finishing solutions. We offer a wide selection of colors and textures tailored to meet diverse industry needs and lifestyle preferences.
          </p>
          <p>
            Our strength lies in combining modern coating technology with a highly skilled team to deliver <strong>Durable, Aesthetic, and Cost-effective</strong> finishes for metal products.
          </p>
          <p>
            With over a decade of experience, we have built a solid reputation for <strong>Quality, Reliability, and On-time Delivery</strong> serving both individual and commercial clients across Sri Lanka.
          </p>
          <p>
            At JSS, we are committed to <strong>Continuous innovation, Customer satisfaction,</strong> and raising the standard of protective surface solutions in the industry.
          </p>
        </div>

        {/* Right: Highlight Box + Stats */}
        <div
          className="about-side-info"
          {...(!isMobile && {
            'data-aos': 'fade-up',
            'data-aos-delay': '100',
          })}
        >
          <div className="highlight-box">
            <h3>We Ensure Your Products Are</h3>
            <ul>
              <li>✔ Affordable</li>
              <li>✔ Color Matching Available</li>
              <li>✔ Professional Service</li>
              <li>✔ Experienced Personnel</li>
              <li>✔ One-Stop Solution</li>
              <li>✔ {new Date().getFullYear() - 2017}+ Years of Experience</li>
              <li>✔ Free Quotation</li>
            </ul>
          </div>

          {/* Stats */}
          <div className="about-stats" {...(!isMobile && {
            'data-aos': 'fade-up',
            'data-aos-delay': '100',
          })}>
            <div className="stat">
              <FaUsers className="stat-icon" />
              <div>
                <h2>
                  <CountUp start={0} end={450} duration={5} />+
                </h2>
                <p>Customers</p>
              </div>
            </div>
            <div className="stat">
              <FaShieldAlt className="stat-icon" />
              <div>
                <h2>
                  <CountUp start={0} end={443} duration={5} />+
                </h2>
                <p>Positive Feedbacks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer will now fade-in too */}
      <footer data-aos="fade-up">
        {/* If you're using a Footer component, wrap it like this: */}
        {/* <div data-aos="fade-up"><Footer /></div> */}
      </footer>
    </div>
  )
}

export default About
