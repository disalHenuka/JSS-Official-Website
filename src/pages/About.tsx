import { useEffect, useState } from 'react'
import '../styles/About.css'
import aboutBg from '../assets/about-bg.jpg'
import { FaUsers, FaShieldAlt } from 'react-icons/fa'
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLocation } from 'react-router-dom'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const About = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [feedbackList, setFeedbackList] = useState<any[]>([])

  const location = useLocation()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)

    // Fetch feedback from Google Sheet every time route changes to About
    if (location.pathname === '/about') {
      fetch(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQh9-XypbdgDWTJart_lvaYRiumK1PN0a02UaTa7bbFxXvjuHybhIaSXkWb7bJhV26D7-sT0CxxCNtn/pub?gid=314338060&single=true&output=csv'
      )
        .then((res) => res.text())
        .then((csvText) => {
          const rows = csvText.split('\n').slice(1)

          const data = rows
            .map((row) => {
              const columns = row.split(',')
              if (columns.length < 5) return null

              const [timestamp, name, email, feedback, rating] = columns

              if (!name?.trim() || !feedback?.trim()) return null

              return {
                name: name.trim(),
                email: email.trim(),
                feedback: feedback.trim(),
                rating: parseInt(rating.trim()) || 0,
                timestamp: timestamp.trim(),
                timeAgo: timestamp ? dayjs(timestamp.trim()).fromNow() : null,
              }
            })
            .filter(Boolean)

          setFeedbackList(data)
        })
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [location])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    document.body.classList.add('services-page')
    return () => document.body.classList.remove('services-page')
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
            Established since 2016, <strong>JSS Colour Coating Pvt (Ltd)</strong> is a trusted
            Sri Lankan company specializing in powder coating and surface finishing solutions.
            We offer a wide selection of colors and textures tailored to meet diverse industry
            needs and lifestyle preferences.
          </p>
          <p>
            Our strength lies in combining modern coating technology with a highly skilled team
            to deliver <strong>Durable, Aesthetic, and Cost-effective</strong> finishes for metal
            products.
          </p>
          <p>
            With over a decade of experience, we have built a solid reputation for{' '}
            <strong>Quality, Reliability, and On-time Delivery</strong> serving both individual and
            commercial clients across Sri Lanka.
          </p>
          <p>
            At JSS, we are committed to{' '}
            <strong>Continuous innovation, Customer satisfaction,</strong> and raising the standard
            of protective surface solutions in the industry.
          </p>
        </div>

        {/* Right: Highlight + Stats */}
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

          <div
            className="about-stats"
            {...(!isMobile && {
              'data-aos': 'fade-up',
              'data-aos-delay': '100',
            })}
          >
            <div className="stat">
              <FaUsers className="stat-icon" />
              <div>
                <h2>
                  <CountUp start={0} end={350} duration={5} />+
                </h2>
                <p>Customers</p>
              </div>
            </div>
            <div className="stat">
              <FaShieldAlt className="stat-icon" />
              <div>
                <h2>
                  <CountUp start={0} end={94} duration={5} />%
                </h2>
                <p>Positive Feedbacks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div {...(!isMobile && { 'data-aos': 'fade-up', 'data-aos-delay': '500' })}>
        <section className="feedback-section" data-aos="fade-up">
          <h2>What Our Customers Say</h2>

          <div className="feedback-list">
            {feedbackList.map((item, index) => (
              <div key={index} className="feedback-card styled-card">
                <div className="stars">
                  {'★'.repeat(item.rating || 0)}
                  {'☆'.repeat(5 - (item.rating || 0))}
                </div>
                <p className="feedback-text">"{item.feedback}"</p>
                <p className="feedback-name">
                  <strong>{item.name || 'Anonymous'}</strong>
                </p>
                {item.timeAgo && <p className="feedback-time">{item.timeAgo}</p>}
              </div>
            ))}
          </div>

          {/* Feedback Button */}
          <div className="view-services-btn-container" style={{ marginTop: '40px' }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScEqWhBQgN-0u1B0_jFM3PQ3-nFM75qhs1G9BWq26eOVdGzIA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="view-services-btn"
            >
              Give Us Your Feedback
            </a>
          </div>
        </section>

      </div>      
      
      <footer data-aos="fade-up">
        {/* Footer content here */}
      </footer>
    </div>
  )
}

export default About
