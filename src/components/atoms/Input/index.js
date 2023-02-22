
import React from 'react';
import { StyledInput } from './index.styled';

export const Input = ({
  placeholder = '',
  type = 'text',
  onChange = () => { },
  ...rest
}) => {
  return (
    <div>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}
