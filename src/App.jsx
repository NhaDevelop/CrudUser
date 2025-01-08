import React from "react";
import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import UpdateUser from "./pages/user/UpdateUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/newUser/CreateUser";
// import ProductList from "./pages/ProductsList/ProductList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
         
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
