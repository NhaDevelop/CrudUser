import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 import "./newuser.css";

export default function CreateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    gender: "male",
    transaction: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { ...formData, id: users.length + 1 };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    navigate("/userList");
  };

  return (
    <div className="createUser">
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} required />

        <label>Gender</label>
        <select name="gender" onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>Transaction</label>
        <input type="text" name="transaction" onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} required />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
