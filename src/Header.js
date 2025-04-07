import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 style={{ float:'left' }}>VSharp</h1>

      <nav style={{ float:'right' }}>
        <a href="#products">Home</a>
        <a href="About.js">About</a>
        <a href="#products">Products</a>
        <a href="#products">Cart</a>
        <a href="counter.js">Counter</a>


      </nav>
    </header>
  );
}

export default Header;
