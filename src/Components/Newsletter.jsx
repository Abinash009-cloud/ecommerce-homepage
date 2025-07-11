// src/components/Newsletter.jsx


export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Stay in the Loop</h2>
      <p>Subscribe to our newsletter and get exclusive deals & updates delivered straight to your inbox.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  )
}
