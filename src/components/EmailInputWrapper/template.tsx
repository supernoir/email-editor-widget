import React from 'react'
import { StyledEmailInputWrapper } from './styles'
import { Title } from '../Title/template'
import { TextArea } from '../TextArea/template'

interface EmailInputWrapperProps {
  shareableItem: string,
  itemList: string[]
}

export const EmailInputWrapper: React.FC<EmailInputWrapperProps> = ({ shareableItem, itemList }) => {
  return <StyledEmailInputWrapper>
    <Title shareableItem={shareableItem} />
    <TextArea itemList={itemList} />
  </StyledEmailInputWrapper>
}