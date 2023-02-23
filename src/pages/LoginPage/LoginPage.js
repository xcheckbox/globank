
import React from 'react'
import { Navbar } from 'shared/Navbar';
import { Login } from '.';
import { StyledLoginPage } from './index.styled';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Login />
    </StyledLoginPage>
  )
}


export default LoginPage;