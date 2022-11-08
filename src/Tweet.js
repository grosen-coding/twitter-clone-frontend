import React, { useState } from "react";

function Tweet({ text }) {
  const newText = text;
  const [count, setCount] = useState(0);

  const initialCount = count;

  const increment = () => {
    setCount(initialCount + 1);
  };

  const decrement = () => {
    setCount(initialCount - 1);
  };

  const reset = () => {
    setCount(count);
  };

  return (
    <div>
      <h1>{newText.toLowerCase()}</h1>
      <h4>Counter: {initialCount}</h4>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Tweet;
