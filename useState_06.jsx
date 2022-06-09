import React, { useState } from "react";

const SyncCounter = () => {
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState("");
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setCurrentCount(`computed count is ${newCount}`);
  }
 
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setCurrentCount(`computed count is ${newCount}`);
  }

  return (
    <div className="App">
      <h1>Update Count!</h1>
      <p>Count: {count}</p>
      <p>{currentCount}</p>
      <button type="button" onClick={increment}>
        Add
      </button>
      <button type="button" onClick={decrement}>
        Subtract
      </button>
    </div>
  );
};

export default SyncCounter;
