import React, { useState } from 'react';
import { FaTshirt, FaUser, FaHeart, FaSearch, FaStar, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShopNow = () => {
    navigate('/new-arrivals');
  };

  const handleCategoryClick = (category) => {
    navigate(`/${category.toLowerCase()}`);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const featuredProducts = [
    {
      name: "Summer Dress",
      price: "$49.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
      description: "Light and breezy summer dress perfect for hot days.",
      details: "Made from 100% cotton, this dress features a flattering A-line silhouette and comfortable fit.",
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'White', 'Pink'],
      material: "100% Cotton",
      care: "Machine wash cold, hang dry"
    },
    {
      name: "Casual T-Shirt",
      price: "$29.99",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      description: "Comfortable everyday t-shirt for casual wear.",
      details: "Premium cotton blend t-shirt with a modern fit and soft feel.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Gray'],
      material: "95% Cotton, 5% Elastane",
      care: "Machine wash cold, tumble dry low"
    },
    {
      name: "Denim Jacket",
      price: "$79.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
      description: "Classic denim jacket for a timeless look.",
      details: "Authentic denim jacket with button closure and multiple pockets.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black'],
      material: "100% Denim",
      care: "Machine wash cold, hang dry"
    },
    {
      name: "Kids Outfit",
      price: "$39.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1519238359922-989348752efb?w=500",
      description: "Adorable outfit set for kids.",
      details: "Comfortable and stylish outfit set perfect for everyday wear.",
      sizes: ['2T', '3T', '4T', '5T'],
      colors: ['Red', 'Blue', 'Green'],
      material: "100% Cotton",
      care: "Machine wash cold, tumble dry low"
    }
  ];

  const newArrivals = [
    {
      name: "Floral Summer Dress",
      price: "$59.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
      description: "Beautiful floral print summer dress with a flattering silhouette.",
      details: "Light and airy fabric perfect for summer days.",
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Pink', 'Yellow'],
      material: "100% Cotton",
      care: "Machine wash cold, hang dry"
    },
    {
      name: "Elegant Evening Gown",
      price: "$129.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      description: "Stunning evening gown for special occasions.",
      details: "Elegant design with premium fabric and perfect fit.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Red', 'Navy'],
      material: "Silk Blend",
      care: "Dry clean only"
    },
    {
      name: "Casual Maxi Dress",
      price: "$49.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
      description: "Comfortable and stylish maxi dress for everyday wear.",
      details: "Flowy design with adjustable straps.",
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Black', 'Blue'],
      material: "95% Cotton, 5% Elastane",
      care: "Machine wash cold"
    },
    {
      name: "Party Dress",
      price: "$79.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      description: "Perfect party dress for any celebration.",
      details: "Sparkling details and comfortable fit.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Gold', 'Silver', 'Black'],
      material: "Polyester Blend",
      care: "Hand wash cold"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Shopify</h1>
          <p>Discover the latest trends in fashion</p>
          <button className="shop-now-btn" onClick={handleShopNow}>Shop Now</button>
        </div>
      </section>

      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {newArrivals.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button 
                    className="quick-view"
                    onClick={() => handleQuickView(product)}
                  >
                    <FaSearch /> Quick View
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? "star-filled" : "star-empty"} />
                  ))}
                  <span>({product.rating})</span>
                </div>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card" onClick={() => handleCategoryClick('men')}>
            <FaTshirt className="category-icon" />
            <h3>Men's Collection</h3>
            <p>Explore our latest men's fashion</p>
            <button className="category-btn">View Collection</button>
          </div>
          <div className="category-card" onClick={() => handleCategoryClick('women')}>
            <FaUser className="category-icon" />
            <h3>Women's Collection</h3>
            <p>Discover trending women's styles</p>
            <button className="category-btn">View Collection</button>
          </div>
          <div className="category-card" onClick={() => handleCategoryClick('kids')}>
            <FaHeart className="category-icon" />
            <h3>Kids' Collection</h3>
            <p>Find adorable outfits for kids</p>
            <button className="category-btn">View Collection</button>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button 
                    className="quick-view"
                    onClick={() => handleQuickView(product)}
                  >
                    <FaSearch /> Quick View
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? "star-filled" : "star-empty"} />
                  ))}
                  <span>({product.rating})</span>
                </div>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="special-offers">
        <div className="offer-card" onClick={handleShopNow}>
          <h3>Summer Sale</h3>
          <p>Up to 50% off on selected items</p>
          <button className="offer-btn">Shop Now</button>
        </div>
        <div className="offer-card" onClick={() => navigate('/new-arrivals')}>
          <h3>New Arrivals</h3>
          <p>Check out our latest collection</p>
          <button className="offer-btn">Explore</button>
        </div>
      </section>

      {selectedProduct && (
        <div className="quick-view-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeQuickView}>
              <FaTimes />
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-details">
                <h2>{selectedProduct.name}</h2>
                <div className="modal-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(selectedProduct.rating) ? "star-filled" : "star-empty"} />
                  ))}
                  <span>({selectedProduct.rating})</span>
                </div>
                <p className="modal-price">{selectedProduct.price}</p>
                <p className="modal-description">{selectedProduct.description}</p>
                
                <div className="product-specs">
                  <div className="spec-item">
                    <h4>Details</h4>
                    <p>{selectedProduct.details}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Material</h4>
                    <p>{selectedProduct.material}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Care Instructions</h4>
                    <p>{selectedProduct.care}</p>
                  </div>
                </div>

                <div className="modal-options">
                  <div className="size-options">
                    <h4>Size</h4>
                    <div className="size-buttons">
                      {selectedProduct.sizes.map(size => (
                        <button key={size} className="size-btn">{size}</button>
                      ))}
                    </div>
                  </div>
                  <div className="color-options">
                    <h4>Color</h4>
                    <div className="color-buttons">
                      {selectedProduct.colors.map(color => (
                        <button key={color} className="color-btn" style={{ backgroundColor: color.toLowerCase() }}></button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="view-details-btn" onClick={() => {
                    closeQuickView();
                    handleShopNow();
                  }}>
                    View Full Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get updates on new arrivals and special offers</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 