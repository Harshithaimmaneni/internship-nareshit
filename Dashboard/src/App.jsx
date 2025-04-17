import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './LoginForm';
import Signup from './signup';

function App() {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
