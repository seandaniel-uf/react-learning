import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object properties

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    // grabbing each inputs individual name attribute
    // const name = e.target.name;
    // console.log(name);
    // // grabbing each inputs individual value
    // const value = e.target.value;
    // console.log(value);
    // we don't want to replace all values potentially so reference the original values, if the name changes give it a new value
    // this can be used for select elements too
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.email && person.age) {
      const newPerson = {
        // firstName: person.firstName,
        // email: person.email,
        // age: person.age,
        // spread syntax
        ...person,
        id: new Date().getTime().toString(),
      };
      // original people, new person
      // spread syntax
      setPeople([...people, newPerson]);

      // setPeople((people) => {
      //   people.push(newPerson);
      //   return people;
      // });

      // reset input values
      setPerson({
        firstName: "",
        email: "",
        age: "",
      });
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map(({ firstName, email, age, id }) => {
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
