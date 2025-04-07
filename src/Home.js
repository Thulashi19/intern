import React from 'react';
import img1 from './img1.png';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img8 from './img8.jpg';
const featuredProducts = [
  {
    id: 1,
    name: 'iPhone 13 Pro Max',
    price: '$799',
    image: img1,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    price: '$699',
    image: img2,
  },
  {
    id: 3,
    name: 'Samsung Galaxy A04',
    price: '$400',
    image: img3,
  },
];

function Home() {
  return (
    <div className="home-container">
      
      <h1 className="home-title">Welcome to VSharp</h1>
      <p className="home-description">
        Explore the latest smartphones with unbeatable deals.
      </p>
      <img src={img8} alt="Banner" className="home-banner" />
      

      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
