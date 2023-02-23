

import { AccountCard } from 'components/molecules/AccountCard'
import { AccountDetailCard } from 'components/molecules/AccountDetailCard'
import { TransactionCard } from 'components/molecules/TransactionCard'
import React from 'react';
import { StyledAccountCard } from './index.styled';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

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
      ],
      transactions: [
        { id: 1, date: "2022-01-01", description: 'Product 1', amount: 5000.00 },
        { id: 1, date: "2022-02-01", description: 'Product 2', amount: 5000.00 },
        { id: 1, date: "2022-03-01", description: 'Product 3', amount: 5000.00 },
        { id: 1, date: "2022-04-01", description: 'Product 4', amount: 5000.00 },
      ]
    }
  }

  return (
    <>
      <AccountDetailCard />

      {
        mockData.account.account_detail.map(({ id, label, value }) => (
          <AccountCard
            key={id}
            title={label}
            balance={value}
            Styler={StyledAccountCard}
          />
        ))
      }

      {
        mockData.account.transactions.map(({ id, description, amount }) => (
          <AccountCard
            key={id}
            title={description}
            balance={amount}
            Icon={<RiMoneyDollarCircleLine />}
          />
        ))
      }
    </>
  )
}
