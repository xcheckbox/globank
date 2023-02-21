
import React from 'react'
import { Dashboard } from '.'

const DashboardPage = () => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>Dashboard Globank</h1>
      <div className='dashboard-container'>
        <Dashboard />
      </div>
    </div>
  )
}

export default DashboardPage;
