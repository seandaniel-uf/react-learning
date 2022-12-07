import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((previousState) => {
      const newArray = previousState.filter((person) => person.id !== id);
      return newArray;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
