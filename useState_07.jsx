// When we are not displaying counter there is no need to rerenders...

import React, { useState, useEffect } from "react";

export default function ClickButton(props) {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((c) => c + 1);
  };

  const onClickRequest = () => {
    //fetch something depends on counter
    console.log(count)
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
