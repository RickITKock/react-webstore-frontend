import axios from "axios";
import React, { useEffect, useState } from "react";

type User = {
  id: string;
  email: string;
  password: string;
};

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8001/users");
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  const renderedUsers = users.map((user: User) => {
    return <div key={user.id}>{user.email}</div>;
  });

  return <div>{renderedUsers}</div>;
}

export default UserList;
