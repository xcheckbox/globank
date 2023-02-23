import { Button } from 'components/atoms/Button'
import React from 'react'
import { AccountCard } from '../AccountCard'
import { StyledAccountDetail } from './index.styled'

export const AccountDetailCard = () => {
  return (
    <StyledAccountDetail>
      <AccountCard
        title={'Mi inversión'}
        balance={'$49449'}
      />

      <div className='account-action'>
        <Button text='Actualizar' />
      </div>

      <div className='account-number'>
        53646-74747-747484-4444
      </div>
    </StyledAccountDetail>
  )
}
