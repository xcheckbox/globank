import { Button } from 'components/atoms/Button'
import React from 'react'
import { AccountCard } from '../AccountCard'
import { StyledAccountDetail, AccountActions } from './index.styled'

export const AccountDetailCard = () => {
  return (
    <StyledAccountDetail>
      <AccountCard
        title={'Mi inversión'}
        balance={'$49449'}
      />

      <AccountActions>
        <Button>Actualizar</Button>
        <Button color='secondary'>Pagar</Button>
      </AccountActions>

      <div className='account-number'>
        53646-74747-747484-4444
      </div>
    </StyledAccountDetail>
  )
}
