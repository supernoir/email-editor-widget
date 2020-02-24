import React from 'react'
import { StyledButton } from './styles'

interface ButtonInterface {
  label: string,
  onClick: (evt: React.MouseEvent<Element, MouseEvent>) => void
}

export const Button: React.FC<ButtonInterface> = ({ label, onClick }) => {
  return <StyledButton
    onClick={(evt: React.MouseEvent<Element, MouseEvent>) => onClick(evt)}
  >
    {label}
  </StyledButton>
}