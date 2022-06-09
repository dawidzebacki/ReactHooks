import React, { useState, useEffect } from "react";

export default function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      const id = setInterval(function log() {
        console.log(`Count is: ${count}`);
      }, 2000);
      return () => clearInterval(id);
    },
    [count]
  );

  const handleClick = () => setCount((count) => count + 1);

  return (
    <>
      <button onClick={handleClick}>Increase</button>
      <div>Counter: {count}</div>
    </>
  );
}
