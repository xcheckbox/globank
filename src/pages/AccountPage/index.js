
import { AccountDetail } from 'components/organisms/AccoutDetail'
import { Contracts } from 'components/organisms/Contracts'
import React from 'react'
import { useNavigate } from 'react-router'
import { Navbar } from 'shared/Navbar'

export const Account = () => {

  const navigator = useNavigate();

  return (
    <div>
      <Navbar>
        <button onClick={() => navigator(-1)}>Regresar</button>
        <h2>Account Detail</h2>
      </Navbar>

      <AccountDetail />
    </div>
  )
}