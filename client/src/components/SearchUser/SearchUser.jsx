import React, { useState } from "react";
import "./SearchUser.css";

const SearchUser = ({ searchUsers }) => {
  const [Value, setValue] = useState("");
  const [Users, setUsers] = useState(null);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = async () => {
    const users = await searchUsers(Value);
    setUsers(users);
  };
  return (
    <div className='search-user'>
      <input type='text' onChange={onChangeHandler} value={Value} />
      <button onClick={onSubmit}>submit</button>
      {Users && Array.isArray(Users) && (
        <ul>
          {Users.map((u, i) => (
            <li>{u.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUser;
