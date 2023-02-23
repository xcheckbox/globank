import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'

export const LoginForm = ({
  handleSubmit = () => { },
  formTitle = 'Iniciar sesión'
}) => {

  const { formState, onInputChange } = useForm({
    username: '',
    password: ''
  })

  return (
    <div>
      <h3>{formTitle}</h3>
      <form onSubmit={() => console.log('On Submit Event', formState)}>

        <label>Usuario</label>
        <Input
          placeholder='Usuario'
          name="username"
          value={formState.username}
          onChange={onInputChange}
        />

        <label>Contraseña</label>
        <Input
          placeholder='Contraseña'
          name='password'
          type='password'
          value={formState.password}
          onChange={onInputChange}
        />

        <Button type='submit' text="Login" />
      </form>
    </div>
  )
}
