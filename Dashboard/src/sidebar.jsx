import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-secondary text-white border-end"
      style={{
        height: '100vh',
        width: '220px',
        position: 'fixed',
        top: '57px',
        left: '0',
        overflowY: 'auto',
      }}
    >
      <div className="list-group list-group-flush">

       
        <div
          className="list-group-item list-group-item-action bg-secondary text-white border-0"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/Dashboard')}
        >
          Dashboard
        </div>

       
        <a
          className="list-group-item list-group-item-action bg-secondary text-white border-0"
          data-bs-toggle="collapse"
          href="#profileMenu"
          role="button"
          aria-expanded="false"
          aria-controls="profileMenu"
        >
          Profile
        </a>

        <div className="collapse ps-3" id="profileMenu">
          <div
            className="list-group-item list-group-item-action bg-secondary text-white border-0"
            onClick={() => navigate('/profile/new-user')}
            style={{ cursor: 'pointer' }}
          >
            New User
          </div>
        </div>

        
        <a
          className="list-group-item list-group-item-action bg-secondary text-white border-0"
          data-bs-toggle="collapse"
          href="#settingsMenu"
          role="button"
          aria-expanded="false"
          aria-controls="settingsMenu"
        >
          Settings
        </a>

        <div className="collapse ps-3" id="settingsMenu">
          <div
            className="list-group-item list-group-item-action bg-secondary text-white border-0"
            onClick={() => navigate('/settings/change-password')}
            style={{ cursor: 'pointer' }}
          >
            Change Password
          </div>
          <div
            className="list-group-item list-group-item-action bg-secondary text-white border-0"
            onClick={() => navigate('/logout')}
            style={{ cursor: 'pointer' }}
          >
            Logout
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
