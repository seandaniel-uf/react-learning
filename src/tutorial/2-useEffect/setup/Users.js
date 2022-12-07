import User from "./User";

// users, is a prop from the users state set in app.js
const Users = ({ users }) => {
  return users.map((user) => {
    // instead of this, I can use spread!
    // return (
    //   <User
    //     key={user.id}
    //     login={user.login}
    //     avatar_url={user.avatar_url}
    //     html_url={user.html_url}
    //   />
    // );
    return <User key={user.id} {...user} />;
  });
};

export default Users;
