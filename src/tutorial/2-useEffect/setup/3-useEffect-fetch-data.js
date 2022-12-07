import React, { useState, useEffect } from "react";
import Users from "./Users";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    console.log("Use Effect Called");
    getData();
  }, []);

  return (
    <>
      <h2>GitHub Users</h2>
      <ul className="users">
        {/* from data in API where we set state */}
        <Users users={users} />
      </ul>
    </>
  );
};

export default UseEffectFetchData;
