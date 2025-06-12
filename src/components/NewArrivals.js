import React, { useState } from 'react';
import { FaSearch, FaStar, FaTimes, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewArrivals.css';

function NewArrivals() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allProducts = [
    // Women's Dresses
    {
      id: 1,
      category: 'women',
      name: "Floral Summer Dress",
      price: 59.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500",
      description: "Beautiful floral print summer dress with a flattering silhouette.",
      details: "Light and airy fabric perfect for summer days. Features a flattering A-line cut and adjustable straps.",
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Pink', 'Yellow'],
      material: "100% Cotton",
      care: "Machine wash cold, hang dry",
      stock: 15
    },
    {
      id: 2,
      category: 'women',
      name: "Elegant Evening Gown",
      price: 129.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      description: "Stunning evening gown for special occasions.",
      details: "Elegant design with premium fabric and perfect fit. Features a sweetheart neckline and flowing skirt.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Red', 'Navy'],
      material: "Silk Blend",
      care: "Dry clean only",
      stock: 10
    },
    {
      id: 9,
      category: 'women',
      name: "Casual Maxi Dress",
      price: 49.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
      description: "Comfortable and stylish maxi dress for everyday wear.",
      details: "Flowy design with adjustable straps. Perfect for casual outings and beach days.",
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Black', 'Blue'],
      material: "95% Cotton, 5% Elastane",
      care: "Machine wash cold",
      stock: 20
    },
    {
      id: 10,
      category: 'women',
      name: "Cocktail Dress",
      price: 89.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      description: "Elegant cocktail dress for special events.",
      details: "Sophisticated design with a flattering silhouette. Perfect for parties and formal gatherings.",
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Red', 'Black', 'Navy'],
      material: "Polyester Blend",
      care: "Dry clean only",
      stock: 12
    },
    // Men's Clothing
    {
      id: 3,
      category: 'men',
      name: "Classic Men's Suit",
      price: 199.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
      description: "Premium tailored suit for formal occasions.",
      details: "Classic design with modern fit. Perfect for business and formal events.",
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Navy', 'Black', 'Gray'],
      material: "Wool Blend",
      care: "Dry clean only",
      stock: 12
    },
    {
      id: 4,
      category: 'men',
      name: "Casual Men's Outfit",
      price: 79.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      description: "Comfortable and stylish casual outfit for everyday wear.",
      details: "Easy to wear and maintain. Perfect for casual outings.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Green', 'Black'],
      material: "Cotton Blend",
      care: "Machine wash cold",
      stock: 20
    },
    {
      id: 11,
      category: 'men',
      name: "Formal Tuxedo",
      price: 249.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
      description: "Elegant tuxedo for special occasions.",
      details: "Premium quality fabric with perfect tailoring. Ideal for weddings and formal events.",
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy'],
      material: "Premium Wool",
      care: "Dry clean only",
      stock: 8
    },
    {
      id: 12,
      category: 'men',
      name: "Business Casual Set",
      price: 129.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      description: "Professional business casual outfit.",
      details: "Comfortable yet professional look. Perfect for office wear.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Gray', 'Navy', 'Black'],
      material: "Cotton Blend",
      care: "Machine wash cold",
      stock: 15
    },
    // Boys' Clothing
    {
      id: 5,
      category: 'boys',
      name: "Classic Boys Suit",
      price: 79.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
      description: "Smart and stylish suit for special occasions.",
      details: "Classic design with modern fit. Perfect for formal events and celebrations.",
      sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      colors: ['Navy', 'Black', 'Gray'],
      material: "Wool Blend",
      care: "Dry clean only",
      stock: 12
    },
    {
      id: 6,
      category: 'boys',
      name: "Casual Boys Outfit",
      price: 39.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1519238359922-989348752efb?w=500",
      description: "Comfortable and stylish casual outfit for everyday wear.",
      details: "Easy to wear and maintain. Perfect for school and playtime.",
      sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      colors: ['Blue', 'Green', 'Red'],
      material: "Cotton Blend",
      care: "Machine wash cold",
      stock: 20
    },
    {
      id: 13,
      category: 'boys',
      name: "Party Suit Set",
      price: 69.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
      description: "Adorable party suit for special occasions.",
      details: "Stylish and comfortable design. Perfect for parties and celebrations.",
      sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      colors: ['Navy', 'Black', 'Burgundy'],
      material: "Polyester Blend",
      care: "Machine wash cold",
      stock: 15
    },
    {
      id: 14,
      category: 'boys',
      name: "School Uniform Set",
      price: 45.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1519238359922-989348752efb?w=500",
      description: "Comfortable school uniform set.",
      details: "Durable and easy to maintain. Perfect for daily school wear.",
      sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
      colors: ['Navy', 'Gray'],
      material: "Cotton Blend",
      care: "Machine wash cold",
      stock: 25
    },
    // Girls' Dresses
    {
      id: 7,
      category: 'girls',
      name: "Princess Party Dress",
      price: 49.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519238359922-989348752efb?w=500",
      description: "Adorable princess dress for special occasions.",
      details: "Sparkly design with comfortable fit. Perfect for parties and celebrations.",
      sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
      colors: ['Pink', 'Purple', 'Blue'],
      material: "Polyester Blend",
      care: "Hand wash cold",
      stock: 15
    },
    {
      id: 8,
      category: 'girls',
      name: "Casual Girls Dress",
      price: 34.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1519238359922-989348752efb?w=500",
      description: "Comfortable and cute dress for everyday wear.",
      details: "Easy to wear and maintain. Perfect for school and playtime.",
      sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
      colors: ['Yellow', 'Green', 'Orange'],
      material: "100% Cotton",
      care: "Machine wash cold",
      stock: 18
    },
    {
      id: 15,
      category: 'girls',
      name: "Floral Summer Dress",
      price: 39.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1519238359922-989348752efb?w=500",
      description: "Beautiful floral dress for summer days.",
      details: "Light and airy fabric with cute floral pattern. Perfect for summer outings.",
      sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
      colors: ['Pink', 'Yellow', 'White'],
      material: "Cotton Blend",
      care: "Machine wash cold",
      stock: 20
    },
    {
      id: 16,
      category: 'girls',
      name: "School Uniform Dress",
      price: 29.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1519238359922-989348752efb?w=500",
      description: "Comfortable school uniform dress.",
      details: "Durable and easy to maintain. Perfect for daily school wear.",
      sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
      colors: ['Navy', 'Gray'],
      material: "Cotton Blend",
      care: "Machine wash cold",
      stock: 30
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  const handleAddToCart = (product) => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select both size and color');
      return;
    }
    addToCart({ ...product, selectedSize, selectedColor });
    toast.success('Item added to cart!');
    closeQuickView();
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success('Item added to wishlist!');
    closeQuickView();
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="new-arrivals-page">
      {/* Hero Section */}
      <section className="new-arrivals-hero">
        <div className="hero-content">
          <h1>New Arrivals</h1>
          <p>Discover our latest collection of stunning dresses</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'women' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('women')}
          >
            Women
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'boys' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('boys')}
          >
            Boys
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'girls' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('girls')}
          >
            Girls
          </button>
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
                  <button 
                    className="quick-view"
                    onClick={() => handleQuickView(product)}
                  >
                    <FaSearch /> Quick View
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} 
                    />
                  ))}
                  <span>({product.rating})</span>
                </div>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <div className="product-actions">
                  <button
                    className="add-to-cart"
                    onClick={() => handleQuickView(product)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button
                    className="add-to-wishlist"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <FaHeart /> Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
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
                    <FaStar key={i} className={i < Math.floor(selectedProduct.rating) ? "star-filled" : "star-empty"} />
                  ))}
                  <span>({selectedProduct.rating})</span>
                </div>
                <p className="modal-price">${selectedProduct.price.toFixed(2)}</p>
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
                        <button 
                          key={size} 
                          className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="color-options">
                    <h4>Color</h4>
                    <div className="color-buttons">
                      {selectedProduct.colors.map(color => (
                        <button 
                          key={color} 
                          className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                          style={{ backgroundColor: color.toLowerCase() }}
                          onClick={() => setSelectedColor(color)}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button
                    className="add-to-wishlist-btn"
                    onClick={() => handleAddToWishlist(selectedProduct)}
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

export default NewArrivals; 