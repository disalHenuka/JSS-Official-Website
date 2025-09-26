import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/ImageSlider.css'

const imageList = [
  {
    src: '/slider-images/image1.jpg',
    title: 'Protective Coatings That Last',
    description:
      'Our colour coatings are engineered for maximum resistance to corrosion, UV exposure, and chemicals — ensuring your surfaces stay protected and polished.',
  },
  {
    src: '/slider-images/image3.jpg',
    title: 'Custom Finishes for Every Industry',
    description:
      'From automotive to architectural projects, we offer customized colour coatings tailored to meet industry standards and aesthetic demands.',
  },
  {
    src: '/slider-images/image4.jpg',
    title: 'Premium Colour Coating Solutions',
    description:
      'Experience unmatched durability and vibrant finishes with our advanced colour coating technology — built to withstand harsh environments and time.',
  },
]

const ImageSlider = () => {
  return (
    <div className="slider-container" data-aos="fade-in" data-aos-delay="200">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        grabCursor
      >
        {imageList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={item.src} alt={`Slide ${index}`} className="slider-image" />
              <div className="dark-overlay" />
              <div className="slider-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
