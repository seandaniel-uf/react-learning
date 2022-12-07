import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <>
      <h1>Questions And Answers About Login</h1>
      <ul>
        {data.map((question) => {
          return <SingleQuestion {...question} />;
        })}
      </ul>
    </>
  );
}

export default App;
