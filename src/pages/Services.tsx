import { useEffect } from 'react'
import '../styles/Services.css'
import services from '../data/servicesData'

const Services = () => {
  useEffect(() => {
    document.body.classList.add('services-page')
    return () => {
      document.body.classList.remove('services-page')
    }
  }, [])

  return (
    <>
      {/* Hero section */}
      <section className="services-hero">
        <div className="services-hero-content" data-aos="fade-up">
          <p className="subtitle">We are specialized in</p>
          <h1 className="title">Powder Coating</h1>
        </div>
      </section>

      {/* Title and Services grid */}
        <section className="services-section">
          <h2 className="services-heading" data-aos="fade-up" data-aos-delay="200">Our Services</h2>

          {/* First 3 cards */}
          <section className="services-grid" data-aos="fade-up" data-aos-delay="300">
            {services.slice(0, 3).map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Next 2 cards centered */}
          <section className="services-grid center-row" data-aos="fade-up" data-aos-delay="400">
            {services.slice(3).map((service, index) => (
              <div className="service-card" key={index + 3}>
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </section>
      </section>
    </>
  )
}

export default Services
