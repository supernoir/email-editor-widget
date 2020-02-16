import React from 'react'
import { StyledTitle, StyledHighlight } from './styles'

interface TitleProps {
  shareableItem: string
}

export const Title: React.FC<TitleProps> = ({ shareableItem }) => {
  const displayTitle = (item: string) => {
    return (<span>
      Share <StyledHighlight>{item}</StyledHighlight> with others
    </span>)
  }
  return <StyledTitle>{displayTitle(shareableItem)}</StyledTitle>
}