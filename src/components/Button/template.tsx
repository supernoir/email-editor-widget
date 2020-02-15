import React from 'react'
import { StyledButton } from './styles'

interface ButtonInterface {
  label: string,
  onClick: (event: any) => void
}

export const Button: React.FC<ButtonInterface> = ({ label, onClick }) => {
  return <StyledButton
    onClick={onClick}
  >
    {label}
  </StyledButton>
}