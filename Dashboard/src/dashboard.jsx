import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ 
          height: 'calc(100vh - 57px)', 
          marginLeft: '200px',          
          paddingTop: '57px'            
        }}
      >
        <h1>Welcome to Dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard;
