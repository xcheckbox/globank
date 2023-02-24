
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountCard } from 'components/molecules/AccountCard';

export const Accounts = () => {

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/account/${id}`)
  }

  return (
    <div>
      <AccountCard
        title={'Tarjeta de credito'}
        balance={'64474'}
        onClick={() => handleNavigate('credit')}
      />

      <AccountCard
        title={'Mis ahorros'}
        balance={'665656'}
        onClick={() => handleNavigate('saving')}
      />

      <AccountCard
        title={'Inversión'}
        balance={'64474'}
        onClick={() => handleNavigate('investment')}
      />
    </div>
  )
}
