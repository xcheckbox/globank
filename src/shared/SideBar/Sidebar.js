
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/atoms/Button';
import { StyledSidebar, StyledLinkContainer } from './index.styled';
import { MdClose } from "react-icons/md";


export const Sidebar = ({ isOpen, handleSidebar }) => {

  return (
    <StyledSidebar isOpen={isOpen}>
      <Button onClick={() => handleSidebar()}><MdClose /></Button>
      <h3>Sidebar content</h3>

      <StyledLinkContainer>
        <Link to={'/legal'}>Legal Page</Link>
        <Link to={'/about'}>About Page</Link>
      </StyledLinkContainer>
    </StyledSidebar>

  )
}
