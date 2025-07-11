// src/components/Testimonials.jsx


export default function Testimonials() {
  const reviews = [
    {
      name: 'Priya Sharma',
      review: 'Absolutely love the quality and service. My go-to shopping site!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Amit Verma',
      review: 'Fast delivery and top-notch products. Highly recommend!',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      name: 'Sneha Das',
      review: 'Great discounts and trendy collections. I’m obsessed!',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
  ]

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <img src={review.image} alt={review.name} />
            <p className="message">“{review.review}”</p>
            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
