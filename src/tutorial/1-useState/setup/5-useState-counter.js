import { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // will update by one, but if you click multiple times it needs to wait 2 seconds as it is referencing the original state value
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button type="btn" className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button type="btn" className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button type="btn" className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>
      <section style={{ margin: "4rem" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" type="button" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
