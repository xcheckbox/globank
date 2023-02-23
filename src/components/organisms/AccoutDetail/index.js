

import { AccountCard } from 'components/molecules/AccountCard'
import { AccountDetailCard } from 'components/molecules/AccountDetailCard'
import React from 'react'
import { StyledAccountCard } from './index.styled'

export const AccountDetail = () => {

  const mockData = {
    account: {
      id: 'ABC',
      type: 'checking_account',
      balance: '$5644,5666',
      label: 'Mi inversión',
      actions: [
        { id: '1', type: 'update_account', label: 'Actualizar' }
      ],
      account_detail: [
        { id: 1, label: 'Monto al vencimiento', value: '$2555,555' },
        { id: 2, label: 'Plazo en días', value: '7' },
        { id: 3, label: 'Interes neto', value: '9.85% ($400.33)' },
        { id: 4, label: 'Interes bruto', value: '10% ($420.33)' },
        { id: 5, label: 'ISR', value: '0.15% ($8.02)' },
      ]
    }
  }

  return (
    <>
      <AccountDetailCard />

      {
        mockData.account.account_detail.map(({ id, label, value }) => (
          <AccountCard key={id} title={label} balance={value} Styler={StyledAccountCard} />
        ))
      }
    </>
  )
}
