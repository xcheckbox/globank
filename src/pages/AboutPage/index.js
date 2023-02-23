
import React from 'react'
import { useNavigate } from 'react-router'
import { Navbar } from 'shared/Navbar'
import { StyledAboutPage } from './index.styled'

export const About = () => {

  const navigator = useNavigate();

  return (
    <div>
      <Navbar>
        <button onClick={() => navigator(-1)}>Regresar</button>
        <h2>About</h2>
      </Navbar>

      <StyledAboutPage>
        <h2>Globank</h2>
        <p>Aplicación Demo BBVA Academy</p>
        <span>Version 1.0.0</span>
      </StyledAboutPage>
    </div>
  )
}