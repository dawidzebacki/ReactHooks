import React, { useState, useRef } from "react";

const AsyncCounter = () => {
  
  const counterRef = useRef(0);
  const [count, setCount] = useState(false);
  
  const handleIncrement = () => {
    counterRef.current++;
    setCount(!count);
  };
  
  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + counterRef.current);
    }, 3000);
  }
  
  return (
    <div>
      <p>You clicked {counterRef.current} times</p>
      <button onClick={handleIncrement}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}

export default AsyncCounter;
