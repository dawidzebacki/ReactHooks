// Which value will be shown on openModal function if we click `Open modal with count` button and then increment count by clicking `Increment count`?

import React, { useState } from "react";

const AsyncCounter = () => {
  const [count, setCount] = useState(0);

 const openModal = () => {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment count
      </button>
      <button onClick={openModal}>
       Open modal with count
      </button>
    </div>
  );
}

export default AsyncCounter;
