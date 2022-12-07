// individual User which gets imported into Users.js
const User = ({ login, avatar_url, html_url }) => {
  return (
    <li>
      <img src={avatar_url} alt={login} />
      <div>
        <h4>{login}</h4>
        <a href={html_url}>Profile</a>
      </div>
    </li>
  );
};

export default User;
