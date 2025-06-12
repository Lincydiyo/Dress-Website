import React, { useState } from 'react';
import { FaTshirt, FaSocks, FaShoePrints, FaSearch, FaUserTie, FaHeart, FaShoppingCart, FaStar, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Men.css';

function Men() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'All', name: 'All', icon: <FaTshirt className="category-icon" /> },
    { id: 'Shirts', name: 'Shirts', icon: <FaUserTie className="category-icon" /> },
    { id: 'Pants', name: 'Pants', icon: <FaSocks className="category-icon" /> },
    { id: 'Shoes', name: 'Shoes', icon: <FaShoePrints className="category-icon" /> }
  ];

  const products = [
    {
      id: 1,
      name: 'Classic White Shirt',
      price: 39.99,
      category: 'Shirts',
      rating: 4.5,
      description: 'A timeless classic for every wardrobe.',
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500',
      details: 'Premium cotton fabric, button-down collar, regular fit. Perfect for both casual and formal occasions.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Light Blue', 'Black'],
      material: '100% Premium Cotton',
      care: 'Machine wash cold, tumble dry low',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'John D.', rating: 5, comment: 'Perfect fit and great quality!' },
        { user: 'Mike R.', rating: 4, comment: 'Good shirt, slightly tight in shoulders' }
      ],
      stock: 15
    },
    {
      id: 2,
      name: 'Slim Fit Jeans',
      price: 49.99,
      category: 'Pants',
      rating: 4.2,
      description: 'Comfortable and stylish slim fit jeans.',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      details: 'Stretch denim, slim fit, five-pocket style. Made with sustainable materials.',
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Blue', 'Black', 'Gray'],
      material: '98% Cotton, 2% Elastane',
      care: 'Machine wash cold, hang dry',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Sarah M.', rating: 5, comment: 'Best jeans ever!' },
        { user: 'Tom B.', rating: 4, comment: 'Great fit, but runs slightly small' }
      ],
      stock: 20
    },
    {
      id: 3,
      name: 'Leather Sneakers',
      price: 59.99,
      category: 'Shoes',
      rating: 4.8,
      description: 'Trendy leather sneakers for all occasions.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      details: 'Premium leather upper, cushioned insole, rubber outsole. Perfect for everyday wear.',
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Black', 'White', 'Brown'],
      material: 'Genuine Leather',
      care: 'Clean with leather cleaner, air dry',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Alex K.', rating: 5, comment: 'Super comfortable!' },
        { user: 'David L.', rating: 4, comment: 'Great quality, true to size' }
      ],
      stock: 25
    },
    {
      id: 4,
      name: 'Casual T-Shirt',
      price: 19.99,
      category: 'Shirts',
      rating: 4.0,
      description: 'Soft cotton t-shirt for everyday wear.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      details: 'Soft cotton fabric, crew neck, regular fit. Perfect for casual outings.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Gray', 'Navy'],
      material: '100% Cotton',
      care: 'Machine wash cold, tumble dry low',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Chris P.', rating: 4, comment: 'Good quality for the price' },
        { user: 'Mark S.', rating: 4, comment: 'Comfortable and durable' }
      ],
      stock: 30
    },
    {
      id: 5,
      name: 'Formal Dress Shoes',
      price: 89.99,
      category: 'Shoes',
      rating: 4.6,
      description: 'Elegant shoes for formal events.',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500',
      details: 'Premium leather, cushioned insole, slip-resistant sole. Perfect for formal occasions.',
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Black', 'Brown'],
      material: 'Premium Leather',
      care: 'Professional cleaning recommended',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'James W.', rating: 5, comment: 'Perfect for formal events' },
        { user: 'Robert H.', rating: 4, comment: 'Great quality, slightly stiff at first' }
      ],
      stock: 15
    },
    {
      id: 6,
      name: 'Chino Pants',
      price: 44.99,
      category: 'Pants',
      rating: 4.3,
      description: 'Versatile chinos for work or play.',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500',
      details: 'Stretch cotton twill, straight fit, four-pocket style. Perfect for business casual.',
      sizes: ['28', '30', '32', '34', '36', '38'],
      colors: ['Khaki', 'Navy', 'Olive'],
      material: '98% Cotton, 2% Elastane',
      care: 'Machine wash cold, hang dry',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Peter M.', rating: 4, comment: 'Great for office wear' },
        { user: 'Steve R.', rating: 5, comment: 'Perfect fit and very comfortable' }
      ],
      stock: 22
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success('Item added to cart!');
  };

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
    toast.success('Item added to wishlist!');
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="men-page">
      {/* Hero Section */}
      <section className="men-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1200)' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Men's Collection</h1>
          <p>Discover our latest styles and trends</p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="categories-container">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="quick-view" onClick={() => openQuickView(product)}>
                    <FaSearch /> Quick View
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} />
                  ))}
                  <span>({product.rating})</span>
                </div>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p className="product-desc">{product.description}</p>
                <div className="product-actions">
                  <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product)}
                    aria-label="Add to Cart"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button
                    className="add-to-wishlist"
                    onClick={() => handleAddToWishlist(product)}
                    aria-label="Add to Wishlist"
                  >
                    <FaHeart /> Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer */}
      <section className="special-offer">
        <div className="offer-content">
          <h2>Special Offer</h2>
          <p>Get 20% off on your first purchase. Use code: FIRST20</p>
          <button className="offer-btn">Shop Now</button>
        </div>
      </section>

      {/* Quick View Modal */}
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
                    <FaStar key={i} className={i < Math.floor(selectedProduct.rating) ? 'star-filled' : 'star-empty'} />
                  ))}
                  <span>({selectedProduct.rating})</span>
                </div>
                <p className="modal-price">${selectedProduct.price.toFixed(2)}</p>
                <p className="modal-description">{selectedProduct.details}</p>
                
                <div className="product-specs">
                  <div className="spec-item">
                    <h4>Material</h4>
                    <p>{selectedProduct.material}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Care Instructions</h4>
                    <p>{selectedProduct.care}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Shipping</h4>
                    <p>{selectedProduct.shipping}</p>
                  </div>
                  <div className="spec-item">
                    <h4>In Stock</h4>
                    <p>{selectedProduct.stock} units available</p>
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

                <div className="product-reviews">
                  <h4>Customer Reviews</h4>
                  {selectedProduct.reviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <div className="review-header">
                        <span className="review-user">{review.user}</span>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? 'star-filled' : 'star-empty'} />
                          ))}
                        </div>
                      </div>
                      <p className="review-comment">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <div className="modal-actions">
                  <button
                    className="add-to-cart"
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      closeQuickView();
                    }}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button
                    className="add-to-wishlist"
                    onClick={() => {
                      handleAddToWishlist(selectedProduct);
                      closeQuickView();
                    }}
                  >
                    <FaHeart /> Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Men; 