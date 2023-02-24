
import React, { useContext } from 'react';
import { Button } from 'components/atoms/Button';
import { LoginForm } from '../../components/molecules/LoginForm';
import { StyledCreateAccount, AccountLink } from './index.styled';
import { AuthContext } from 'auth/authContext';
import { types } from 'auth/authReducer';

export const Login = () => {

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: { name: 'Sergio' }
    })
  }

  return (
    <>
      <h1>Globank</h1>

      <LoginForm
        onSubmit={handleLogin}
      />

      <StyledCreateAccount>
        <Button color='secondary'>Crear cuenta</Button>
        <AccountLink>Olvidaste la contraseña</AccountLink>
      </StyledCreateAccount>
    </>
  )
}
