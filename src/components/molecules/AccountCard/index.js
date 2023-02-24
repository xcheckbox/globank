
import React from 'react'
import { StyledAccountCard, StyledAccountNumber, StyledBalance } from './index.styled';
import { CustomIcon } from 'components/atoms/Icon';
import { Amount } from 'components/atoms/Amount';

export const AccountCard = ({
  title,
  balance,
  validateAmount = false,
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
          <Amount validate={validateAmount} amount={balance} />
          {description && <p className='description'>Total ahorrado</p>}
        </StyledBalance>
      </Styler>
    </>

  )
}
