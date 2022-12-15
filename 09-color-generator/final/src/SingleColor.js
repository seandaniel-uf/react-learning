import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";
// rgb, weight coming colors in app.js

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const r = rgb[0];
  // const g = rgb[1];
  // const b = rgb[2];
  // const hex = rgbToHex(r, g, b);
  // spread em!
  const hex = rgbToHex(...rgb);
  console.log(bcg);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    // clean up
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  const handleClick = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
