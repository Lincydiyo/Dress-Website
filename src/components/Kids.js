import React, { useState } from 'react';
import { FaTshirt, FaSocks, FaShoePrints, FaUserTie, FaHeart, FaShoppingCart, FaStar, FaSearch, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Kids.css';

function Kids() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'All', name: 'All', icon: <FaTshirt className="category-icon" /> },
    { id: 'Boys', name: 'Boys', icon: <FaUserTie className="category-icon" /> },
    { id: 'Girls', name: 'Girls', icon: <FaSocks className="category-icon" /> },
    { id: 'Shoes', name: 'Shoes', icon: <FaShoePrints className="category-icon" /> }
  ];

  const products = [
    {
      id: 1,
      name: 'Boys Classic Suit',
      price: 49.99,
      category: 'Boys',
      rating: 4.6,
      description: 'Smart and stylish suit for special occasions.',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500',
      details: 'Classic design with modern fit. Perfect for formal events and celebrations.',
      sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      colors: ['Navy', 'Black', 'Gray'],
      material: 'Wool Blend',
      care: 'Dry clean only',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'John D.', rating: 5, comment: 'Perfect for my son\'s graduation!' },
        { user: 'Mike R.', rating: 4, comment: 'Great quality, slightly big' }
      ],
      stock: 15
    },
    {
      id: 2,
      name: 'Girls Party Dress',
      price: 39.99,
      category: 'Girls',
      rating: 4.8,
      description: 'Adorable party dress for special occasions.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
      details: 'Flowy design with comfortable fit. Perfect for parties and celebrations.',
      sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      colors: ['Pink', 'Blue', 'White'],
      material: 'Cotton Blend',
      care: 'Machine wash cold',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Sarah M.', rating: 5, comment: 'My daughter loves it!' },
        { user: 'Emma R.', rating: 4, comment: 'Beautiful dress' }
      ],
      stock: 20
    },
    {
      id: 3,
      name: 'Kids Sneakers',
      price: 29.99,
      category: 'Shoes',
      rating: 4.5,
      description: 'Comfortable sneakers for active kids.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      details: 'Lightweight design, easy to put on, perfect for daily wear.',
      sizes: ['1', '2', '3', '4', '5'],
      colors: ['Blue', 'Red', 'Black'],
      material: 'Canvas and Rubber',
      care: 'Machine wash cold',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Lisa K.', rating: 5, comment: 'Great for running around!' },
        { user: 'Anna B.', rating: 4, comment: 'Durable and comfortable' }
      ],
      stock: 25
    },
    {
      id: 4,
      name: 'Boys Casual Set',
      price: 34.99,
      category: 'Boys',
      rating: 4.4,
      description: 'Comfortable casual outfit for everyday wear.',
      image: 'https://images.unsplash.com/photo-1519238359922-989348752efb?w=500',
      details: 'Easy to wear and maintain. Perfect for school and playtime.',
      sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      colors: ['Blue', 'Green', 'Gray'],
      material: 'Cotton Blend',
      care: 'Machine wash cold',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Peter M.', rating: 5, comment: 'Perfect for school!' },
        { user: 'Tom B.', rating: 4, comment: 'Good quality' }
      ],
      stock: 18
    },
    {
      id: 5,
      name: 'Girls Summer Dress',
      price: 29.99,
      category: 'Girls',
      rating: 4.7,
      description: 'Light and comfortable summer dress.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
      details: 'Flowy design, perfect for hot summer days.',
      sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      colors: ['Yellow', 'Pink', 'White'],
      material: 'Cotton',
      care: 'Machine wash cold',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Maria S.', rating: 5, comment: 'Beautiful summer dress!' },
        { user: 'Sophie L.', rating: 4, comment: 'Great for beach days' }
      ],
      stock: 22
    },
    {
      id: 6,
      name: 'Kids Sandals',
      price: 24.99,
      category: 'Shoes',
      rating: 4.3,
      description: 'Comfortable sandals for summer.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      details: 'Easy to wear, perfect for beach and pool.',
      sizes: ['1', '2', '3', '4', '5'],
      colors: ['Blue', 'Pink', 'White'],
      material: 'Synthetic',
      care: 'Hand wash',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Emily T.', rating: 5, comment: 'Perfect for summer!' },
        { user: 'Olivia R.', rating: 4, comment: 'Good quality' }
      ],
      stock: 30
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
    <div className="kids-page">
      <section className="kids-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519238359922-989348752efb?w=1200)' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Kids' Collection</h1>
          <p>Discover our latest styles for little ones</p>
        </div>
      </section>

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

export default Kids; 