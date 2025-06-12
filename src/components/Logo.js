import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import './Logo.css';

function Logo() {
  return (
    <Link to="/" className="logo">
      <div className="logo-icon">
        <FaShoppingBag />
      </div>
      <span className="logo-text">Shopify</span>
    </Link>
  );
}

export default Logo; 