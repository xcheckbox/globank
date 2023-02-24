
import { Button } from 'components/atoms/Button'
import React from 'react'
import { StyledLegalCard, Title } from './index.styled'

export const LegalCard = ({ title }) => {
  return (
    <StyledLegalCard>
      <Title>{title}</Title>
      <Button color="secondary">Ver</Button>
    </StyledLegalCard>
  )
}
