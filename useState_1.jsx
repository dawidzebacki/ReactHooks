import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const lazyUpdate = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  };
  
  return (
    <div>
      <p>
        <strong>You clicked {count} times</strong>
      </p>
      <button onClick={lazyUpdate}>Increment count</button>
    </div>
  );
};

export default Counter;
