

import React from 'react';
import { AccountCard } from 'components/molecules/AccountCard'
import { AccountDetailCard } from 'components/molecules/AccountDetailCard'
import { StyledAccountCard, StyledTransactionCard } from './index.styled';
import { MdOutlineMonetizationOn } from "react-icons/md";

export const AccountDetail = ({ detail }) => {

  const { account_detail, transactions, actions, label, balance } = detail;

  return (
    <>
      <AccountDetailCard
        title={label}
        balance={balance}
        actions={actions}
      />

      {
        account_detail.map(({ id, label, value }) => (
          <AccountCard
            key={id}
            title={label}
            balance={value}
            Styler={StyledAccountCard}
          />
        ))
      }

      {
        transactions.map(({ id, description, amount, date }) => (
          <AccountCard
            key={id}
            title={description}
            balance={amount}
            description={date}
            validateAmount
            Styler={StyledTransactionCard}
            Icon={<MdOutlineMonetizationOn />}
          />
        ))
      }
    </>
  )
}
