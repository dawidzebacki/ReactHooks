import React, { useState, useEffect } from "react";

export default function ClickButton(props) {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((c) => c + 1);
  };

  const onClickRequest = () => {
    //fetch something depends on counter
  };

  useEffect(() => {
    console.log("rerender");
  }, [count]);

  return (
    <div>
      <button onClick={onClickCount}>Counter</button>
      <button onClick={onClickRequest}>Submit</button>
    </div>
  );
}
