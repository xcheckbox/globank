
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountCard } from 'components/molecules/AccountCard';
import { formatCurrency } from 'utils/formatCurrency';
import { MdOutlineSavings, MdCreditCard, MdMoney, MdOutlineMonetizationOn } from "react-icons/md";
import { StyledAccounts } from './index.styled';

export const Accounts = ({ accounts }) => {

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/account/${id}`)
  }

  const mapperIcon = {
    'checking_account': <MdCreditCard />,
    'saving_account': <MdOutlineSavings />,
    'investment_account': <MdMoney />,
  }

  return (
    <StyledAccounts>
      {
        accounts?.map((account) => {

          const { type, balance, label, description } = account;

          return (
            <AccountCard
              key={type}
              title={label}
              balance={formatCurrency(balance)}
              description={description}
              Icon={mapperIcon[type]}
              onClick={() => handleNavigate('credit')}
            />
          )
        })
      }
    </StyledAccounts>
  )
}
