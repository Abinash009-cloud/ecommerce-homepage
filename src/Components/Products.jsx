// src/components/Products.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?page=2&limit=6')
      .then((res) => {
        const data = res.data.map((item, index) => ({
          name: [
            'Smart Watch Series X',
            'Modern Leather Jacket',
            'Wireless Headphones',
            'Stylish Sneakers',
            'Minimalist Backpack',
            'LED Desk Lamp',
          ][index],
          price: ['₹4,999', '₹2,299', '₹1,899', '₹2,599', '₹1,399', '₹999'][index],
          image: `https://picsum.photos/id/${item.id}/400/300`,
        }))
        setProducts(data)
      })
      .catch((err) => console.error('Error fetching images:', err))
  }, [])

  return (
    <section className="products">
      <h2>Trending Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}
