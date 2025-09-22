import '../styles/Home.css'
import ImageSlider from '../components/ImageSlider'
import SampleGallery from '../components/SampleGallery'


const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h2>Welcome to</h2>
          <h1>JSS Colour Coating Pvt (Ltd)</h1>
          <p>We provide high-quality durable powder coating solutions.</p>
        </div>
      </div>

      <section className="sample-text2" data-aos="fade-up" data-aos-delay="200">
        <h2>WHY CHOOSE US</h2>
          <p>
            <b>JSS Colour Coating Pvt (Ltd)</b> is a trusted name in the powder coating
            industry with over <b>8 years of experience.</b> of experience. Conveniently located near  
            <b> Piliyandala Junction</b>, our facility is equipped with a <b>21-foot oven</b> and a
            complete pre-treatment setup. We utilize both Gema and Chinese dual spray
            guns to ensure high-quality, durable finishes for a wide range of applications.
          </p>      
      </section>

      <ImageSlider data-aos="fade-up" data-aos-delay="500"/>

      <SampleGallery data-aos="fade-up" data-aos-delay="300"/>

      <div className="view-services-btn-container" data-aos="fade-up" data-aos-delay="350">
        <a href="/services" className="view-services-btn">
          View our services &rarr;
        </a>
      </div>
    </div>
  )
}

export default Home
