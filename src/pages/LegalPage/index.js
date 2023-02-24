
import { Contracts } from 'components/organisms/Contracts'
import React from 'react'
import { useNavigate } from 'react-router'
import { Navbar } from 'shared/Navbar'
import { Button } from 'components/atoms/Button';
import { MdArrowBackIosNew as Return } from "react-icons/md";

export const Legal = () => {

  const navigator = useNavigate();

  return (
    <div>
      <Navbar>
        <Button onClick={() => navigator(-1)}><Return /></Button>
        <h2>Legal</h2>
      </Navbar>

      <Contracts />
    </div>
  )
}