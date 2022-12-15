import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
    // color from state
    let colors = new Values(color).all(10);
    console.log(colors);
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColor(e.target.value)}
            type="text"
            value={color}
            placeholder="#f15025"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>List Will Go Here!</h4>
      </section>
    </>
  );
}

export default App;
