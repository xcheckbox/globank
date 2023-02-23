
import { Contracts } from 'components/organisms/Contracts'
import React from 'react'
import { useNavigate } from 'react-router'
import { Navbar } from 'shared/Navbar'
import { StyledAboutPage } from './index.styled'

export const Legal = () => {

  const navigator = useNavigate();

  return (
    <div>
      <Navbar>
        <button onClick={() => navigator(-1)}>Regresar</button>
        <h2>Legal</h2>
      </Navbar>

      <Contracts />
    </div>
  )
}