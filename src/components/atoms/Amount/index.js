import React from 'react';
import styled from 'styled-components';

const AmountText = styled.span`
  color: ${({ amount, validate }) => validate ? amount >= 0 ? "green" : "red" : "black"};
  font-size: ${({ size }) => size ? size + "px" : "inherit"};
`;

export const Amount = ({ amount = 0, size, validate }) => {
  return (
    <AmountText amount={amount} size={size} validate={validate}>
      {amount.toLocaleString()}
    </AmountText>
  )
}
