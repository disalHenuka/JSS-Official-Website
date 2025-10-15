import { useEffect, useState } from 'react'
import '../styles/SampleGallery.css'

const sampleMedia = import.meta.glob('../assets/samples/*.{jpg,jpeg,png,gif,mp4}', {
  eager: true,
  import: 'default',
})

const descriptions: string[] = [
  'Aluminium chair done in RAL 8016',
  'Expanded Aluminium mesh done in RAL 8016',
  'Car alloy wheel finished in RAL 9003',
  'Outdoor railing coated in RAL 9010',
  'Industrial part coated in RAL 5002',
  'Aluminium chair done in RAL 8023',
  'Car alloy wheel finished in RAL 5017',
  'Car alloy wheel finished in RAL 7016',
  'Expanded Aluminium mesh done in RAL 2004',
  'Industrial part coated in RAL 5002',
  'Aluminium chair done in RAL 8023',
  'Metal gate coated in RAL 9005',
  'Car alloy wheel finished in RAL 7016',
  'Outdoor railing coated in RAL 9010',
  'Industrial part coated in RAL 5002',
]

const SampleGallery = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null)

  const handleImageClick = (index: number) => {
    if (window.innerWidth <= 600) {
      setZoomedIndex((prev) => (prev === index ? null : index))
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 600) {
        setZoomedIndex(null)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Sort by numeric part in filename
  const sortedEntries = Object.entries(sampleMedia).sort(([a], [b]) => {
    const getNumber = (str: string) => {
      const match = str.match(/(\d+)/)
      return match ? parseInt(match[1], 10) : 0
    }
    return getNumber(a) - getNumber(b)
  })

  return (
    <section className="sample-gallery" {...props}>
      <h2>Our Product Samples</h2>
      <div className="gallery-grid">
        {sortedEntries.map(([path, src], index) => {
          const isVideo = path.endsWith('.mp4')
          const description = descriptions[index] || `Sample ${index + 1}`

          return (
            <div key={index} className="gallery-item">
              {isVideo ? (
                <video
                  src={src as string}
                  className="gallery-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={src as string}
                  alt={`Sample ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                  className={`gallery-image ${zoomedIndex === index ? 'zoomed' : ''}`}
                />
              )}
              <p className="gallery-description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SampleGallery
