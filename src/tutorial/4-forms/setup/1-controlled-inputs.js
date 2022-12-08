import React, { useState } from "react";
import { useEffect } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // es6 if the propery matches the variable
      const person = { id: new Date().getTime().toString(), firstName, email };

      // setPeople((people) => {
      //   // spread.. original people plus new person
      //   return [...people, person];
      // });

      // without spread
      setPeople((people) => {
        people.push(person);
        return people;
      });

      setFirstName("");
      setEmail("");

      console.log(person);
      // const person = {
      //   email: email,
      //   firstName: firstName,
      // };
    } else {
      console.log("Empty Values");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        <ul>
          {people.map(({ id, firstName, email }) => {
            return (
              <li key={id}>
                <p>{firstName}</p>
                <p>{email}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
};

export default ControlledInputs;
