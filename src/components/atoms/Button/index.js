
import React from 'react';
import { StyledButton } from './index.styled';

export const Button = ({
  type = 'button',
  children,
  color = 'primary',
  disabled = false,
  onClick = () => { },
}) => {
  return (
    <StyledButton
      color={color}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}
