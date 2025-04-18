import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

function Home() {
  return (
    <div>
    <Header />
    <Sidebar />
    <div>
      
      <div className="p-4" style={{ flex: 1 }}>
        <h1>Welcome to App</h1>
        <p>This is your dashboard.</p>
      </div>
    </div>
  </div>
  )
}

export default Home;
