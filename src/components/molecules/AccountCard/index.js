
import React from 'react'
import { StyledAccountCard, StyledAccountNumber, StyledBalance } from './index.styled';
import { FaReceipt } from "react-icons/fa";

export const AccountCard = ({ title, balance, Icon = <FaReceipt /> }) => {
  return (
    <>
      <StyledAccountCard>
        <StyledAccountNumber>
          {Icon}
          <span className='title'>{title}</span>
        </StyledAccountNumber>
        <StyledBalance>
          <span className='balance'>$88898</span>
          <p className='description'>Total ahorrado</p>
        </StyledBalance>
      </StyledAccountCard>
    </>

  )
}
