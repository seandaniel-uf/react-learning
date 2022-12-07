import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [answer, showAnswer] = useState(false);

  const toggleInfo = () => {};
  return (
    <li key={id}>
      <h2>{title}</h2>
      <button onClick={() => showAnswer(!answer)}>+</button>
      {answer && <p>{info}</p>}
    </li>
  );
};

export default Question;
