
import { AccountDetail } from 'components/organisms/AccoutDetail'
import { Contracts } from 'components/organisms/Contracts'
import { useFetch } from 'hooks/useFetch'
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { Navbar } from 'shared/Navbar'

export const Account = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const navigator = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useFetch(`${API_URL}/accounts/${id}`);

  if (isLoading) return;

  return (
    <div>
      <Navbar>
        <button onClick={() => navigator(-1)}>Regresar</button>
        <h2>Account Detail</h2>
      </Navbar>

      <AccountDetail detail={data} />
    </div>
  )
}