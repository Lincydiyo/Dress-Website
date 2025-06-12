import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaMale, FaFemale, FaChild, FaBars, FaTimes, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Logo />
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              <FaHome className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/men" 
              className={location.pathname === '/men' ? 'active' : ''}
              onClick={closeMenu}
            >
              <FaMale className="nav-icon" />
              <span>Men</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/women" 
              className={location.pathname === '/women' ? 'active' : ''}
              onClick={closeMenu}
            >
              <FaFemale className="nav-icon" />
              <span>Women</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/kids" 
              className={location.pathname === '/kids' ? 'active' : ''}
              onClick={closeMenu}
            >
              <FaChild className="nav-icon" />
              <span>Kids</span>
            </Link>
          </li>
        </ul>
        <div className="nav-actions">
          <div className="cart-icon">
            <Link to="/cart" aria-label="Cart">
              <FaShoppingCart />
              {cart.length > 0 && <span className="badge">{cart.length}</span>}
            </Link>
          </div>
          <div className="wishlist-icon">
            <Link to="/wishlist" aria-label="Wishlist">
              <FaHeart />
              {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 