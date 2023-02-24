import { Button } from 'components/atoms/Button'
import React from 'react'
import { AccountCard } from '../AccountCard'
import { StyledAccountDetail, AccountActions } from './index.styled'

export const AccountDetailCard = ({ title, balance, actions, numberAccount = '' }) => {
  return (
    <StyledAccountDetail>
      <AccountCard
        title={title}
        balance={balance}
      />

      <AccountActions>
        {
          actions?.map(({ label, id }) => <Button key={id}>{label}</Button>)
        }
      </AccountActions>

      <div className='account-number'>
        1234-5678-0000-0000
      </div>
    </StyledAccountDetail>
  )
}
