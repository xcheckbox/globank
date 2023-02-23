import React from 'react'
import { Link } from 'react-router-dom'
import { StyledSidebar } from './index.styled'

export const Sidebar = ({ isOpen, handleSidebar }) => {

  return (
    <StyledSidebar isOpen={isOpen}>
      <button onClick={() => handleSidebar()}>Close</button>
      <h3>Sidebar content</h3>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={'/legal'}>Legal Page</Link>
        <Link to={'/about'}>About Page</Link>
      </div>
    </StyledSidebar>

  )
}
