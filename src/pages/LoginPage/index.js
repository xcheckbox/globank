
import React from 'react';
import { LoginForm } from '../../components/molecules/LoginForm';

export const Login = () => {
  return (
    <>
      <h1>Globank</h1>
      <LoginForm />

      <div className='account-action'>
        <p>Olvidaste la contraseña</p>

        <button>Crear cuenta</button>
        <p>Crear cuenta</p>
      </div>
    </>
  )
}
