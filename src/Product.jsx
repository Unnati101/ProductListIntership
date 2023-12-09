import React, { useState } from 'react';
import './Product.css';

const Product = ({ name, description, price, additionalDetails }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-container">
      <div onClick={toggleDetails} className="product-header">
        <strong>{name}</strong> - ${price}
      </div>
      {showDetails && (
        <div className="product-details">
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Additional Details:</strong> {additionalDetails}</p>
        </div>
      )}
    </div>
  );
};

export default Product;