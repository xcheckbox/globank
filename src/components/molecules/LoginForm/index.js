import React, { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { StyledLoginForm, StyledFormControl } from './index.styled'


export const LoginForm = ({
  onSubmit = () => { },
  formTitle = 'Iniciar sesión'
}) => {

  const { formState, onInputChange } = useForm({
    username: '',
    password: ''
  })

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (formState.username && formState.password) {
      setDisabled(false);
    }
  }, [formState])

  return (
    <StyledLoginForm>
      <h3>{formTitle}</h3>
      <form>

        <StyledFormControl>
          <label>Usuario</label>
          <Input
            placeholder='Usuario'
            name="username"
            value={formState.username}
            onChange={onInputChange}
          />
        </StyledFormControl>

        <StyledFormControl>
          <label>Contraseña</label>
          <Input
            placeholder='Contraseña'
            name='password'
            type='password'
            value={formState.password}
            onChange={onInputChange}
          />
        </StyledFormControl>

        <Button
          color='secondary'
          onClick={onSubmit}
          disabled={disabled}
        >
          Ingresar
        </Button>
      </form>
    </StyledLoginForm>
  )
}
