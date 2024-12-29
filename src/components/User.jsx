// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const User = () => {
  const navigate = useNavigate()
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Harry" },
    { id: 3, name: "JJ" },
    { id: 4, name: "Deji" },
  ];

  
  const handleUser = (userId, userName) => {
    navigate(`/user/${userId}/${userName}`)
  }


  return (
    <div className="container mt-5">
      <h1>User List:</h1>
      <ul>
        {users.map((user) => {
          return <li className="userLi" key={user.id} onClick={() => handleUser(user.id, user.name)}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default User;
