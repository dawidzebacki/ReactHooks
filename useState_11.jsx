//Count will increase once or three times?

import React, { useState } from "react";

export default function MyIncreaser() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    increase();
    increase();
    increase();
  };
  return (
    <>
      <button onClick={handleClick}>Increase</button>
      <div>Counter: {count}</div>
    </>
  );
}
