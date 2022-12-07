import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
export const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // runs after ever re-render
  useEffect(() => {
    console.log("Use Effect Called");
    if (value > 0) {
      document.title = `New Messages ${value}`;
    }
  });

  console.log("Render Component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
