import React, { useState } from 'react';


const ErrorExample = () => {
  let title = 'Random Title';
  const handleClick = () => {
    title = 'Random Title 2';
    console.log(title);
  }
  return (
  <div>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change Title</button>
  </div>
  )
};

export default ErrorExample;
