import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
 import "./user.css";

export default function UpdateUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state;
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const updatedUsers = users.map((u) => (u.id === formData.id ? formData : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/userList");
  };

  return (
    <div className="updateUser">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>Transaction</label>
        <input
          type="text"
          name="transaction"
          value={formData.transaction}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
