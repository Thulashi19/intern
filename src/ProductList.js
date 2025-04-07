import React from 'react';
import Product from './Product';
import img1 from './img1.png';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.png';

const products = [
  { id: 1, name: 'iPhone 13 Pro max', price: 799, description: 'Latest iPhone with amazing features.', image: img1},
  { id: 2, name: 'Samsung Galaxy S21', price: 699, description: 'High-performance Samsung mobile.', image: img2 },
  { id: 3, name: 'Samsung Galaxy A04', price: 400, description: 'medium-performance Samsung mobile.', image: img3},
  { id: 4, name: 'Samsung Galaxy A50', price: 600, description: 'High-performance Samsung mobile.', image: img4 },

  // Add more products as needed
];

function ProductList({ addToCart }) {
  return (
    <section id="products">
      <h2 style={{ textAlign:'center' }}>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
