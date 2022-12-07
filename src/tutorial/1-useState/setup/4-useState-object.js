import { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "peter",
  //   age: 24,
  //   message: "",
  // });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    setMessage("hello world");
    // with spread, we are only changing age and message (only variables declared)
    // setPerson({ ...person, message: "hello world" });
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
