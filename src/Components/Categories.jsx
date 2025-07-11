// src/components/Categories.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Categories() {
  const [categories, setCategories] = useState([])

  const categoryNames = ['Men', 'Women', 'Gadgets', 'Home Decor']

  const PEXELS_API_KEY = 'MAjrMNSpselvMkl5v7gmy0Wwfy9XhvtTYZKQ7y4xzeMJGDGrCP4i5X1X' // ⬅️ Replace this with your key

  const categoryQueries = {
    Men: 'men fashion',
    Women: 'women fashion',
    Gadgets: 'smartphone technology',
    'Home Decor': 'home interior decoration',
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          categoryNames.map((name) =>
            axios.get('https://api.pexels.com/v1/search', {
              headers: {
                Authorization: PEXELS_API_KEY,
              },
              params: {
                query: categoryQueries[name],
                per_page: 1,
              },
            })
          )
        )

        const mapped = responses.map((res, index) => ({
          name: categoryNames[index],
          image: res.data.photos[0].src.medium,
        }))

        setCategories(mapped)
      } catch (err) {
        console.error('Error loading Pexels images:', err)
      }
    }

    fetchImages()
  }, [])

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
