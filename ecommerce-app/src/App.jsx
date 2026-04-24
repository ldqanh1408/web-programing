import { useState } from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Wireless Noise-Canceling Headphones',
    price: 249.99,
    originalPrice: 329.99,
    rating: 4.8,
    reviews: 2847,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Minimalist Leather Backpack',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviews: 1203,
    badge: '-30%',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Fashion',
  },
  {
    id: 3,
    name: 'Smart Fitness Watch Pro',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 3891,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Wearables',
  },
  {
    id: 4,
    name: 'Ceramic Pour-Over Coffee Set',
    price: 54.99,
    originalPrice: 54.99,
    rating: 4.9,
    reviews: 876,
    badge: null,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=400&h=400&fit=crop',
    category: 'Home',
  },
  {
    id: 5,
    name: 'Ergonomic Mechanical Keyboard',
    price: 149.99,
    originalPrice: 189.99,
    rating: 4.5,
    reviews: 2156,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop',
    category: 'Electronics',
  },
  {
    id: 6,
    name: 'Handcrafted Wooden Sunglasses',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviews: 643,
    badge: null,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    category: 'Fashion',
  },
  {
    id: 7,
    name: 'Portable Bluetooth Speaker',
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.6,
    reviews: 4521,
    badge: '-30%',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    category: 'Electronics',
  },
  {
    id: 8,
    name: 'Premium Yoga Mat',
    price: 45.99,
    originalPrice: 65.99,
    rating: 4.8,
    reviews: 1892,
    badge: 'Eco',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
    category: 'Sports',
  },
]

const categories = [
  { name: 'Electronics', icon: 'devices', count: 1243 },
  { name: 'Fashion', icon: 'shirt', count: 2891 },
  { name: 'Home & Living', icon: 'home', count: 876 },
  { name: 'Sports', icon: 'activity', count: 543 },
  { name: 'Beauty', icon: 'sparkles', count: 1204 },
  { name: 'Books', icon: 'book-open', count: 3421 },
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    text: 'Absolutely love the quality of products. Fast shipping and amazing customer service!',
    rating: 5,
    product: 'Wireless Headphones',
  },
  {
    id: 2,
    name: 'James Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    text: 'Best online shopping experience I have had in years. The product exceeded my expectations.',
    rating: 5,
    product: 'Fitness Watch',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
    text: 'Great prices and the items always arrive in perfect condition. Highly recommend!',
    rating: 5,
    product: 'Leather Backpack',
  },
]

const icons = {
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  cart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  ),
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  devices: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  ),
  shirt: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z"/>
    </svg>
  ),
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  activity: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  sparkles: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  ),
  'book-open': (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  menu: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  ),
  x: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  ),
  chevronDown: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  ),
  arrowRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  truck: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  creditCard: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>
    </svg>
  ),
  refresh: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
    </svg>
  ),
}

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= Math.round(rating) ? 'star filled' : 'star'}>
          {icons.star}
        </span>
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {product.badge && (
          <span className={`product-badge badge-${product.badge.toLowerCase().replace(/[^a-z]/g, '')}`}>
            {product.badge}
          </span>
        )}
        <button
          className={`wishlist-btn ${liked ? 'active' : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label="Add to wishlist"
        >
          {icons.heart}
        </button>
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <StarRating rating={product.rating} />
          <span className="review-count">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="product-price-row">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button className="add-to-cart-btn">
          {icons.cart}
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount] = useState(3)

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="header-container">
            <p className="announcement">
              Summer Sale — Up to 50% Off Selected Items. Limited Time Only!
            </p>
          </div>
        </div>
        <nav className="navbar">
          <div className="header-container navbar-inner">
            <div className="logo">
              <span className="logo-icon">S</span>
              <span className="logo-text">ShopVerse</span>
            </div>

            <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <a href="#" className="nav-link active">Home</a>
              <a href="#" className="nav-link has-dropdown">
                Shop {icons.chevronDown}
              </a>
              <a href="#" className="nav-link has-dropdown">
                Categories {icons.chevronDown}
              </a>
              <a href="#" className="nav-link">Deals</a>
              <a href="#" className="nav-link">About</a>
            </div>

            <div className="header-actions">
              <div className="search-bar">
                <span className="search-icon">{icons.search}</span>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
              <button className="action-btn" aria-label="Wishlist">
                {icons.heart}
              </button>
              <button className="action-btn cart-btn" aria-label="Cart">
                {icons.cart}
                <span className="cart-badge">{cartCount}</span>
              </button>
              <button className="action-btn" aria-label="Account">
                {icons.user}
              </button>
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? icons.x : icons.menu}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">New Collection 2026</span>
          <h1 className="hero-title">
            Discover the Future<br />of Shopping
          </h1>
          <p className="hero-subtitle">
            Curated premium products, exclusive deals, and a seamless experience — all in one place.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn-primary">
              Shop Now {icons.arrowRight}
            </a>
            <a href="#" className="btn-outline">
              Explore Deals
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">25K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Average Rating</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card card-1">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" alt="Featured product" />
          </div>
          <div className="hero-card card-2">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" alt="Featured product" />
          </div>
          <div className="hero-card card-3">
            <img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop" alt="Featured product" />
          </div>
          <div className="hero-glow"></div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="trust-container">
          <div className="trust-item">
            {icons.truck}
            <div>
              <strong>Free Shipping</strong>
              <span>On orders over $50</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            {icons.shield}
            <div>
              <strong>Secure Payment</strong>
              <span>100% protected</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            {icons.refresh}
            <div>
              <strong>Easy Returns</strong>
              <span>30-day policy</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            {icons.creditCard}
            <div>
              <strong>Flexible Payment</strong>
              <span>Buy now, pay later</span>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Shop by Category</h2>
              <p className="section-subtitle">Browse our extensive collection</p>
            </div>
            <a href="#" className="view-all-link">
              View All {icons.arrowRight}
            </a>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <a href="#" key={cat.name} className="category-card">
                <div className="category-icon">
                  {icons[cat.icon]}
                </div>
                <h3 className="category-name">{cat.name}</h3>
                <span className="category-count">{cat.count.toLocaleString()} items</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="section-container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Trending Products</h2>
              <p className="section-subtitle">Most popular picks this week</p>
            </div>
            <div className="product-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">New Arrivals</button>
              <button className="filter-btn">Best Sellers</button>
              <button className="filter-btn">On Sale</button>
            </div>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-container">
          <div className="promo-card promo-dark">
            <span className="promo-tag">Limited Offer</span>
            <h2 className="promo-title">Get 40% Off on Electronics</h2>
            <p className="promo-desc">Upgrade your tech game with our exclusive summer electronics sale.</p>
            <a href="#" className="btn-primary promo-btn">Shop Electronics</a>
          </div>
          <div className="promo-card promo-light">
            <span className="promo-tag tag-light">New Arrivals</span>
            <h2 className="promo-title dark">Summer Fashion 2026</h2>
            <p className="promo-desc dark">Refresh your wardrobe with our latest fashion collection.</p>
            <a href="#" className="btn-outline promo-btn dark">Explore Fashion</a>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header centered">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from real people</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <h4 className="testimonial-name">{t.name}</h4>
                    <span className="testimonial-product">Purchased: {t.product}</span>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className={`star filled`}>{icons.star}</span>
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Stay in the Loop</h2>
          <p className="newsletter-subtitle">
            Subscribe to our newsletter for exclusive deals, new arrivals, and insider-only discounts.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn-primary newsletter-btn">
              Subscribe
            </button>
          </form>
          <p className="newsletter-disclaimer">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">S</span>
                <span className="logo-text">ShopVerse</span>
              </div>
              <p className="footer-brand-desc">
                Your premium destination for curated products and exceptional shopping experiences.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">F</a>
                <a href="#" className="social-link" aria-label="Twitter">T</a>
                <a href="#" className="social-link" aria-label="Instagram">I</a>
                <a href="#" className="social-link" aria-label="YouTube">Y</a>
              </div>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-heading">Shop</h4>
              <ul className="footer-links">
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">Sale</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 ShopVerse. All rights reserved.</p>
            <div className="footer-payments">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayPal</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
