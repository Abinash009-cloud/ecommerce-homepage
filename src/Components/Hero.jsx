// src/components/Hero.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Hero() {
  const [heroImage, setHeroImage] = useState('')

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?page=1&limit=1')
      .then((res) => {
        const imageId = res.data[0].id
        setHeroImage(`https://picsum.photos/id/${imageId}/1000/500`)
      })
      .catch((err) => {
        console.error('Failed to load hero image:', err)
        setHeroImage('https://picsum.photos/1000/500') // fallback
      })
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the Future of Shopping</h1>
        <p>Shop exclusive collections, trending products, and the best deals of 2025 — all in one place.</p>
        <button>Start Shopping</button>
      </div>
      <div className="hero-image">
        {heroImage && <img src={heroImage} alt="Hero banner" />}
      </div>
    </section>
  )
}
