import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './LoginForm';
import Signup from './signup';
import Home from './home';
import Header from './header';
import Sidebar from './sidebar';


function App() {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
