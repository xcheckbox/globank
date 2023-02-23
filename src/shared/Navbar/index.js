import React from 'react'
import { StyledNavbar } from './index.styled'

export const Navbar = ({ children }) => {
  return (
    <StyledNavbar>
      {children}
    </StyledNavbar>
  )
}
