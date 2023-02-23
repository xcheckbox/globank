
import React from 'react'
import { StyledAccountCard, StyledAccountNumber, StyledBalance } from './index.styled';
import { FaReceipt } from "react-icons/fa";

export const AccountCard = ({
  title,
  balance,
  description,
  Icon,
  Styler = StyledAccountCard,
  onClick = () => { }
}) => {
  return (
    <>
      <Styler onClick={onClick}>
        <StyledAccountNumber>
          {Icon && Icon}
          <span className='title'>{title}</span>
        </StyledAccountNumber>
        <StyledBalance>
          <span className='balance'>{balance}</span>
          {description && <p className='description'>Total ahorrado</p>}
        </StyledBalance>
      </Styler>
    </>

  )
}
