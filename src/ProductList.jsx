import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </div>
  );
};
export default ProductList;