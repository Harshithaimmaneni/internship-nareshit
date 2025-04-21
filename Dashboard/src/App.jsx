import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './LoginForm';
import Signup from './signup';
import Home from './home';
import Header from './header';
import Sidebar from './sidebar';
import Dashboard from "./dashboard";
import NewUser from "./NewUser";
import Profile from "./profile";


function App() {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/new-user" element={<NewUser />} />

      </Routes>
    </div>
  );
}

export default App;
