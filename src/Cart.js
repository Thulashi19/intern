import React from 'react';

function Cart({ cart }) {
  return (
    <section id="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
