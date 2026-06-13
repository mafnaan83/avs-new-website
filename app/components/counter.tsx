"use client";
import React, { useState } from "react";

const Counter = () => {
  console.log("Counter conponent");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Cliked {count} times</button>
    </div>
  );
};

export default Counter;
