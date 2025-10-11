import { useEffect, useState } from 'react'
import '../styles/SampleGallery.css'

const sampleMedia = import.meta.glob('../assets/samples/*.{jpg,jpeg,png,gif,mp4}', {
  eager: true,
  import: 'default',
})

const SampleGallery = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null)

  const handleImageClick = (index: number) => {
    // Only zoom on mobile (width <= 600px)
    if (window.innerWidth <= 600) {
      setZoomedIndex((prev) => (prev === index ? null : index))
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 600) {
        setZoomedIndex(null) // Remove zoom on scroll
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="sample-gallery" {...props}>
      <h2>Our Product Samples</h2>
      <div className="gallery-grid">
        {Object.entries(sampleMedia).map(([path, src], index) => {
          const isVideo = path.endsWith('.mp4')
          return isVideo ? (
            <video
              key={index}
              src={src as string}
              className="gallery-image"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              key={index}
              src={src as string}
              alt={`Sample ${index + 1}`}
              onClick={() => handleImageClick(index)}
              className={`gallery-image ${zoomedIndex === index ? 'zoomed' : ''}`}
            />
          )
        })}
      </div>
    </section>
  )
}

export default SampleGallery
