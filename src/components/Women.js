import React, { useState } from 'react';
import { FaTshirt, FaSocks, FaShoePrints, FaSearch, FaUserTie, FaHeart, FaShoppingCart, FaStar, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Women.css';

function Women() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'All', name: 'All', icon: <FaTshirt className="category-icon" /> },
    { id: 'Dresses', name: 'Dresses', icon: <FaUserTie className="category-icon" /> },
    { id: 'Tops', name: 'Tops', icon: <FaSocks className="category-icon" /> },
    { id: 'Shoes', name: 'Shoes', icon: <FaShoePrints className="category-icon" /> }
  ];

  const products = [
    {
      id: 1,
      name: 'Summer Floral Dress',
      price: 79.99,
      category: 'Dresses',
      rating: 4.8,
      description: 'Light and flowy floral dress perfect for summer days.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
      details: 'Made with lightweight fabric, this dress features a beautiful floral pattern and a flattering silhouette.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Pink', 'White'],
      material: 'Cotton Blend',
      care: 'Machine wash cold',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Sarah M.', rating: 5, comment: 'Perfect summer dress!' },
        { user: 'Emma R.', rating: 4, comment: 'Beautiful pattern' }
      ],
      stock: 20
    },
    {
      id: 2,
      name: 'Casual Blouse',
      price: 49.99,
      category: 'Tops',
      rating: 4.6,
      description: 'Elegant blouse for any occasion.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
      details: 'Versatile blouse that can be dressed up or down.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Beige'],
      material: 'Silk Blend',
      care: 'Dry clean only',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Lisa K.', rating: 5, comment: 'Great quality!' },
        { user: 'Anna B.', rating: 4, comment: 'Perfect fit' }
      ],
      stock: 15
    },
    {
      id: 3,
      name: 'Designer Heels',
      price: 129.99,
      category: 'Shoes',
      rating: 4.7,
      description: 'Elegant heels for special occasions.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      details: 'Comfortable yet stylish heels with a classic design.',
      sizes: ['5', '6', '7', '8', '9'],
      colors: ['Black', 'Red', 'Nude'],
      material: 'Leather',
      care: 'Professional cleaning recommended',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Maria S.', rating: 5, comment: 'So comfortable!' },
        { user: 'Sophie L.', rating: 4, comment: 'Beautiful design' }
      ],
      stock: 12
    },
    {
      id: 4,
      name: 'Evening Gown',
      price: 199.99,
      category: 'Dresses',
      rating: 4.9,
      description: 'Stunning evening gown for special events.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
      details: 'Elegant design with premium fabric and perfect fit.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Burgundy'],
      material: 'Silk',
      care: 'Dry clean only',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Emily T.', rating: 5, comment: 'Perfect for my wedding!' },
        { user: 'Olivia R.', rating: 5, comment: 'Absolutely stunning' }
      ],
      stock: 8
    },
    {
      id: 5,
      name: 'Casual T-Shirt',
      price: 29.99,
      category: 'Tops',
      rating: 4.5,
      description: 'Comfortable everyday t-shirt.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
      details: 'Soft and breathable fabric for all-day comfort.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Gray', 'Black'],
      material: 'Cotton',
      care: 'Machine wash cold',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Jessica M.', rating: 4, comment: 'Great basic tee' },
        { user: 'Rachel B.', rating: 5, comment: 'Very comfortable' }
      ],
      stock: 25
    },
    {
      id: 6,
      name: 'Summer Sandals',
      price: 59.99,
      category: 'Shoes',
      rating: 4.6,
      description: 'Comfortable sandals for summer.',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      details: 'Stylish and comfortable sandals perfect for warm weather.',
      sizes: ['5', '6', '7', '8', '9'],
      colors: ['Brown', 'Black', 'White'],
      material: 'Leather',
      care: 'Wipe clean',
      shipping: 'Free shipping on orders over $50',
      reviews: [
        { user: 'Laura K.', rating: 5, comment: 'Perfect for summer!' },
        { user: 'Michelle R.', rating: 4, comment: 'Great quality' }
      ],
      stock: 18
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
    <div className="women-page">
      {/* Hero Section */}
      <section className="women-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200)' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Women's Collection</h1>
          <p>Discover our latest styles for women</p>
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

export default Women; 