import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const products = [
  { id: 1, name: 'Wireless Headphones', price: 249.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', category: 'Electronics' },
  { id: 2, name: 'Leather Backpack', price: 89.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', category: 'Fashion' },
  { id: 3, name: 'Fitness Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', category: 'Wearables' },
  { id: 4, name: 'Coffee Set', price: 54.99, image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=400&h=400&fit=crop', category: 'Home' },
]

const categories = [
  { name: 'Electronics', icon: '📱', count: 1243 },
  { name: 'Fashion', icon: '👕', count: 2891 },
  { name: 'Home', icon: '🏠', count: 876 },
  { name: 'Sports', icon: '⚽', count: 543 },
  { name: 'Beauty', icon: '✨', count: 1204 },
  { name: 'Books', icon: '📚', count: 3421 },
]

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <p className="announcement">Summer Sale — Up to 50% Off Selected Items!</p>
      </div>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="logo">
            <span className="logo-icon">S</span>
            <span className="logo-text">ShopVerse</span>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <span className="logo-icon">S</span>
              <span className="logo-text">ShopVerse</span>
            </div>
            <p className="footer-desc">Premium products, exceptional experience.</p>
          </div>
          <div>
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/">New Arrivals</Link></li>
              <li><Link to="/">Best Sellers</Link></li>
              <li><Link to="/">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/">Help</Link></li>
              <li><Link to="/">Returns</Link></li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">&copy; 2026 ShopVerse. All rights reserved.</p>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">New Collection 2026</span>
          <h1 className="hero-title">Discover the Future of Shopping</h1>
          <p className="hero-subtitle">Curated premium products, exclusive deals, and a seamless experience — all in one place.</p>
          <Link to="/cart" className="btn-primary">Shop Now</Link>
          <div className="hero-stats">
            <div className="stat"><span className="stat-number">50K+</span><span className="stat-label">Products</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><span className="stat-number">25K+</span><span className="stat-label">Customers</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><span className="stat-number">4.9</span><span className="stat-label">Rating</span></div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-container">
          <div className="trust-item"><span>🚚</span><div><strong>Free Shipping</strong><span>Orders over $50</span></div></div>
          <div className="trust-divider"></div>
          <div className="trust-item"><span>🔒</span><div><strong>Secure Payment</strong><span>100% protected</span></div></div>
          <div className="trust-divider"></div>
          <div className="trust-item"><span>↩</span><div><strong>Easy Returns</strong><span>30-day policy</span></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Categories</h2>
          <div className="categories-grid">
            {categories.map(c => (
              <div key={c.name} className="category-card">
                <div className="category-icon">{c.icon}</div>
                <h3>{c.name}</h3>
                <span>{c.count.toLocaleString()} items</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg">
        <div className="container">
          <h2 className="section-title">Trending Products</h2>
          <div className="products-grid">
            {products.map(p => (
              <div key={p.id} className="product-card">
                <div className="product-image"><img src={p.image} alt={p.name} /></div>
                <div className="product-info">
                  <span className="product-category">{p.category}</span>
                  <h3>{p.name}</h3>
                  <span className="product-price">${p.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section newsletter">
        <div className="newsletter-container">
          <h2>Stay in the Loop</h2>
          <p>Subscribe for exclusive deals and new arrivals.</p>
          <form onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>ShopVerse — Redefining online shopping since 2020.</p>
      </div>
      <div className="container about-content">
        <div className="about-stats">
          {[
            { num: '50K+', label: 'Products' },
            { num: '25K+', label: 'Customers' },
            { num: '150+', label: 'Countries' },
            { num: '4.9/5', label: 'Rating' },
          ].map(s => (
            <div key={s.label} className="about-stat">
              <span className="stat-number">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="about-team">
          <h2>Our Team</h2>
          <div className="team-grid">
            {[
              { name: 'Alexandra Chen', role: 'CEO', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
              { name: 'Marcus Johnson', role: 'Head of Product', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
              { name: 'Sophia Williams', role: 'CXO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
              { name: 'David Park', role: 'CTO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
            ].map(m => (
              <div key={m.name} className="team-card">
                <img src={m.img} alt={m.name} />
                <h3>{m.name}</h3>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Cart() {
  const items = [
    { id: 1, name: 'Wireless Headphones', price: 249.99, qty: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
    { id: 7, name: 'Bluetooth Speaker', price: 69.99, qty: 2, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop' },
  ]
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const shipping = subtotal > 100 ? 0 : 9.99

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="cart-layout">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div><h3>{item.name}</h3><span>${item.price.toFixed(2)}</span></div>
                <div>Qty: {item.qty}</div>
                <div>${(item.price * item.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
            <div className="total"><span>Total</span><span>${(subtotal + shipping).toFixed(2)}</span></div>
            <button className="btn-primary" style={{ width: '100%' }}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
