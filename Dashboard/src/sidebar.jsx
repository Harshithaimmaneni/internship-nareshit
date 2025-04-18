import React from 'react'

function Sidebar() {
  return (
    <div>
    <div className="bg-light border-end" style={{ height: '100vh', width: '200px', position: 'fixed' }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Dashboard</li>
        <li className="list-group-item">Profile</li>
        <li className="list-group-item">Settings</li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar;
