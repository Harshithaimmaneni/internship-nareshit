import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

function Home() {
  return (
    <div>
    <Header />
    <Sidebar />
    <div>
      
    <div style={{ marginLeft: '200px', paddingTop: '70px', minHeight: '100vh' }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <h1>Welcome to App</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;
