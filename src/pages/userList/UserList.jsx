import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
 import "./user.css";

export default function UserList() {
  const navigate = useNavigate();

  // Load users from localStorage or default data
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          { id: 1, username: "john_doe", gender: "male", transaction: "$120.00", email: "john@example.com" },
          { id: 2, username: "jane_smith", gender: "female", transaction: "$340.00", email: "jane@example.com" },
        ];
  });

  // Save users to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="userList">
      <h1>User List</h1>
      <Link to="/create">
        <button className="createUserButton">Create User</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Gender</th>
            <th>Transaction</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.gender}</td>
              <td>{user.transaction}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => navigate(`/update/${user.id}`, { state: { user } })}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
