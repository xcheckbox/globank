import { useState } from "react"

export const useForm = (initialState = {}) => {

  const [formState, setFormState] = useState(initialState);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    })
  }

  return {
    ...formState,
    formState,
    onInputChange
  }
}