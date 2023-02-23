
import React from 'react';
import { StyledCard } from './index.styled';

export const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}
