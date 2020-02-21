import React from 'react'
import { StyledEmailInputWrapper } from './styles'
import { Title } from '../Title/template'
import { TextArea } from '../TextArea/template'
import { Item } from '../../types'

interface EmailInputWrapperProps {
  shareableItem: string,
  itemList: string[],
  removeItemFromList: (item: Item) => void,
  addToItemsList: (item: Item) => void
}

export const EmailInputWrapper: React.FC<EmailInputWrapperProps> = ({ shareableItem, itemList, removeItemFromList, addToItemsList }) => {
  return <StyledEmailInputWrapper>
    <Title shareableItem={shareableItem} />
    <TextArea
      itemList={itemList}
      removeItemFromList={removeItemFromList}
      addToItemsList={addToItemsList}
    />
  </StyledEmailInputWrapper>
}