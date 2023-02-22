
import React from 'react'

export const Button = ({
  type = 'button',
  onClick = () => { },
  text = 'Click'
}) => {
  return (
    <div>
      <button
        type={type}
      >
        {text}
      </button>
    </div>
  )
}
