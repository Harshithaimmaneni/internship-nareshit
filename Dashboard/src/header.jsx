import React from "react";


function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary fixed-top w-100" style={{ height: '60px' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* <img
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Bootstrap */}
        </a>
      </div>
    </nav>
  );
}

export default Header;
