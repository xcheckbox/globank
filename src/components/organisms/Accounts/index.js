
import { AccountCard } from 'components/molecules/AccountCard'
import React, { useState } from 'react'

export const Accounts = () => {

  return (
    <div>
      <AccountCard
        title={'Tarjeta de credito'}
        balance={'64474'}
      />

      <AccountCard
        title={'Mis ahorros'}
        balance={'665656'}
      />

      <AccountCard
        title={'Inversión'}
        balance={'64474'}
      />
    </div>
  )
}
