
import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to Our Platform</h1>
        <p className="lead">Create, manage and explore users easily!</p>
        <a href="/register" className="btn btn-primary btn-lg mt-3">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
