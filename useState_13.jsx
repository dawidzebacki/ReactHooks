//What useEffect will be console.logging?
import React, { useState, useEffect } from "react";

export default function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    setInterval(function log() {
      console.log(`Count is: ${count}`);
    }, 2000);
  }, []);

//TRY ME:
//   useEffect(function () {
//     setInterval(function log() {
//       console.log(`Count is: ${count}`);
//     }, 2000);
//   }, [count]);

  const handleClick = () => setCount((count) => count + 1);
  
  return (
    <>
      <button onClick={handleClick}>Increase</button>
      <div>Counter: {count}</div>
    </>
  );
}
