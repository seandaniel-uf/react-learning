import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // console logs 1 and the first value in the array (1)
  // const value = useState(1)[0];
  // console logs 1 and the second value in the array (useState function)
  // const handler = useState(1)[1];
  // console.log(value, handler)

  const [text, setText] = useState('Random Title');

  const handleClick = () => {
    if (text === 'random title') {
      setText('Random Title 2');
    } else {
      setText('Random title');
    }
  }

  return (
    <>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        Change Text
      </button>
    </>
  )
};

export default UseStateBasics;
