import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // provider wraps the whole component tree
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API/Use Context Hook</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map(({ id, name }) => {
        return <SinglePerson key={id} name={name} id={id} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  console.log(removePerson);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

// const List = () => {
//   const mainData = useContext(PersonContext);
//   console.log(mainData);
//   return (
//     <>
//       {mainData.people.map((person) => {
//         return <SinglePerson key={person.id} {...person} />;
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name }) => {
//   const { removePerson } = useContext(PersonContext);

//   return (
//     <div className="item">
//       <h4>{name}</h4>
//       <button onClick={() => removePerson(id)}>remove</button>
//     </div>
//   );
// };

export default ContextAPI;
