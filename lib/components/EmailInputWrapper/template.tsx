import React from 'react'
import { StyledEmailInputWrapper } from './styles'
import { Title } from '../Title/template'
import { TextArea } from '../TextArea/template'
import { Item, ItemList } from '../../types'

interface EmailInputWrapperProps {
  shareableItem: string,
  itemList: ItemList,
  removeItemFromList: (item: Item) => void,
  addToItemsList: (items: ItemList) => void
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