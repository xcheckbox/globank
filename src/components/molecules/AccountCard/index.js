
import React from 'react'
import { StyledAccountCard, StyledAccountNumber, StyledBalance } from './index.styled';
import { CustomIcon } from 'components/atoms/Icon';

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
          <CustomIcon>{Icon}</CustomIcon>
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
