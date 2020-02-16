import React from 'react'
import { StyledTitle, StyledHighlight } from './styles'

interface TitleProps {
  shareableItem: any
}

export const Title: React.FC<TitleProps> = (shareableItem) => {
  return (<StyledTitle>{`Share ${<StyledHighlight>{shareableItem}</StyledHighlight>} with others`}</StyledTitle>)
}