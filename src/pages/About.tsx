import { useEffect } from 'react'
import '../styles/About.css'
import aboutBg from '../assets/about-bg.jpg' 
import { FaUsers, FaShieldAlt } from 'react-icons/fa'
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
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
      >
        <h1 className="about-title" data-aos="fade-up">WHY CHOOSE US</h1>
      </section>

      {/* Info + Stats Section */}
      <section className="about-content">
        {/* Left: Description Box */}
        <div className="about-box" data-aos="fade-up">
          <p>
            Established since 2016, <strong>JSS Colour Coating Pvt (Ltd)</strong> is a trusted Sri Lankan company specializing in <strong>powder coating</strong> and surface finishing solutions. We offer a <strong>wide selection of colors and textures</strong> tailored to meet diverse industry needs and lifestyle preferences.
          </p>
          <p>
            Our strength lies in combining <strong>modern coating technology</strong> with a highly skilled team to deliver <strong>durable, aesthetic, and cost-effective</strong> finishes for metal products.
          </p>
          <p>
            With over a decade of experience, we have built a solid reputation for <strong>quality, reliability, and on-time delivery</strong> — serving both individual and commercial clients across Sri Lanka.
          </p>
          <p>
            At JSS, we are committed to <strong>continuous innovation, customer satisfaction,</strong> and raising the standard of protective surface solutions in the industry.
          </p>
        </div>

        {/* Right: Highlight Box + Stats */}
        <div className="about-side-info">
          {/* Highlight Box */}
          <div className="highlight-box" data-aos="fade-left">
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
          <div className="about-stats" data-aos="fade-up" data-aos-delay="200">
            <div className="stat">
              <FaUsers className="stat-icon" />
              <div>
                <h2><CountUp start={0} end={450} duration={5} />+</h2>
                <p>Customers</p>
              </div>
            </div>
            <div className="stat">
              <FaShieldAlt className="stat-icon" />
              <div>
                <h2><CountUp start={0} end={443} duration={5} />+</h2>
                <p>Positive Feedbacks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
