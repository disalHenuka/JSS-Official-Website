import '../styles/Home.css'
import ImageSlider from '../components/ImageSlider'
import SampleGallery from '../components/SampleGallery'
import { useEffect, useState } from 'react'
import homeLogo from '../assets/logo1.png'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Set initially
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.classList.add('home-page')
    return () => {
      document.body.classList.remove('home-page')
    }
  }, [])

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content" data-aos="fade-up">
          <img src={homeLogo} alt="JSS Logo" className="home-logo" />
          <h1>JSS Colour Coating Pvt (Ltd)</h1>
          <p>We provide high-quality durable powder coating solutions.</p>
        </div>
      </div>

      <section className="sample-text" data-aos="fade-up" data-aos-delay="200">
        <h2>WHY CHOOSE US</h2>
        <p>
          <b>JSS Colour Coating Pvt (Ltd)</b> is a trusted name in the powder coating
          industry with over <b>8 years of experience</b>. Conveniently located near
          <b> Piliyandala Junction</b>, our facility is equipped with a <b>21-foot oven</b> and a
          complete pre-treatment setup. We utilize both Gema and Chinese dual spray
          guns to ensure high-quality, durable finishes for a wide range of applications.
        </p>
      </section>
      <div{...(!isMobile && { 'data-aos': 'fade-up', 'data-aos-delay': '500' })}> 
        <ImageSlider/>
      </div>
      <div{...(!isMobile && { 'data-aos': 'fade-up', 'data-aos-delay': '300' })}> 
        <SampleGallery/>
      </div>

      <div className="view-services-btn-container" data-aos="fade-up" data-aos-delay="350">
        <a href="/services" className="view-services-btn">
          View our services &rarr;
        </a>
      </div>
    </div>
  )
}

export default Home
