//Count and currentCount are the same?

import React, { useState } from "react";

const SyncCounter = () => {
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState("");
  const increment = () => {
    setCount(count + 1);
    setCurrentCount(`computed count is ${count}`);
  };

  const decrement = () => {
    setCount(count - 1);
    setCurrentCount(`computed count is ${count}`);
  };

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
