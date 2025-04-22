import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./LoginForm";
import Signup from "./signup";
import Home from "./home";
import Header from "./header";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import NewUser from "./NewUser";
import Profile from "./profile";

// Optional Layout Component
const Layout = ({ children }) => (
  <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1">
      <Header />
      <div className="container mt-4">{children}</div>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

     
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/profile/new-user"
        element={
          <Layout>
            <NewUser />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
