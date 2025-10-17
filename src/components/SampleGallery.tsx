import { useEffect, useState } from 'react'
import '../styles/SampleGallery.css'

const sampleMedia = import.meta.glob('../assets/samples/*.{jpg,jpeg,png,gif,mp4}', {
  eager: true,
  import: 'default',
})

const descriptions: string[] = [
  'Aluminium chair done in RAL 8016',//1
  'Expanded Aluminium mesh done in RAL 8016',//2
  'Motorbike alloy wheel finished in RAL 9003',//3
  'Steel table stand finished in RAL 9005 Matt',//4
  'Motorbike alloy wheel finished in RAL 5021 gloss',//5
  'Name plate done in RAL 9005',//6
  'Motorbike engine parts RAL 9005 gloss',//7
  'sample image',//8
  'Expanded Aluminium mesh done in RAL 2004',//9
  'Motorbike alloy wheel finished in RAL 9005 gloss',//10
  'sample image',//11
  'Powder coating video',//12  
  'sample video',//13
  'sample video',//14
  'Car alloy wheel finished in RAL 7016',//15
  'Outdoor railing coated in RAL 9010',//16
  'Industrial part coated in RAL 5002',//17
  'Expanded Aluminium mesh done in RAL 2004',//18
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
