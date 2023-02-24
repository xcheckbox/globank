
import { AccountDetail } from 'components/organisms/AccoutDetail'
import { useFetch } from 'hooks/useFetch'
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { Navbar } from 'shared/Navbar'
import { Button } from 'components/atoms/Button';
import { MdArrowBackIosNew as Return } from "react-icons/md";

export const Account = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const navigator = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useFetch(`${API_URL}/accounts/${id}`);

  if (isLoading) return;

  return (
    <div>
      <Navbar>
        <Button onClick={() => navigator(-1)}><Return /></Button>
        <h2>Account Detail</h2>
      </Navbar>

      <AccountDetail detail={data} />
    </div>
  )
}