import * as React from 'react'
import { ButtonWrapper } from './ButtonStyle'

interface ButtonProps {
  label: string
}

export const Button = ({ label }: ButtonProps) => {
  return <ButtonWrapper>{label}</ButtonWrapper>
}
