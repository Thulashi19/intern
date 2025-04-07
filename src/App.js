import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css'; 
import Counter from './Counter';
import About from './About';
import Home from './Home';

function App() {
  const [cart, setCart] = useState([]);
  
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header />
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
      <Counter/>
      <About/>
      <Home/>
      
    </div>
 
   
    
  );
}

export default App;
