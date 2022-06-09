import React, { useRef, useEffect } from "react";

export default function ClickButton(props) {
  const count = useRef(0);

  const onClickCount = () => {
    count.current++;
  };

  const onClickRequest = () => {
    //fetch something depends on counter
    console.log(count.current)
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
