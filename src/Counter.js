import React, { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };

  
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>Counter: {count}</h1>
    <button onClick={increment} style={{ marginRight: '10px', padding: '10px', fontSize: '16px', cursor: 'pointer' }}>Increment</button>
    <button onClick={decrement} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>Decrement</button>
  </div>
  
  );
}

export default Counter;
