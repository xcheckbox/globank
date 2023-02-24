import React from 'react'
import { useNavigate } from 'react-router'
import { Navbar } from 'shared/Navbar'
import { StyledAboutPage } from './index.styled';
import { Button } from 'components/atoms/Button';
import { MdArrowBackIosNew as Return } from "react-icons/md";


export const About = () => {

  const navigator = useNavigate();

  return (
    <div>
      <Navbar>
        <Button onClick={() => navigator(-1)}><Return /></Button>
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