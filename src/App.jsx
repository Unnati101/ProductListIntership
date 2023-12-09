import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

const App = () => {
  const products = [
    {
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      price: 19.99,
      additionalDetails: 'Dimensions: 10x20x5',
    },
    {
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 29.99,
      additionalDetails: 'Dimensions: 15x25x8',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
};

export default App;