import React, { useState } from 'react'
import { StyledTextAreaView, StyledTextAreaEdit, StyledItem, StyledInvalidItem } from './styles'
import { RemoveIcon } from '../RemoveIcon/template'
import { ShareableTypes } from '../../constants/enums'
import { validateEmailAddress } from '../../util/validity'
import { Item, ItemList } from '../../types'

interface TextAreaProps {
  itemList: string[],
  addToItemsList: (items: ItemList | Item) => void,
  removeItemFromList: (item: Item) => void
}

enum TextAreaModes {
  edit = "edit",
  view = "view"
}

export const TextArea: React.FC<TextAreaProps> = ({ itemList, removeItemFromList, addToItemsList }) => {
  const [mode, setMode] = useState(TextAreaModes.view)

  const handleRemoveItem = (item: Item) => {
    removeItemFromList(item)
  }

  const handleKeyPress = (evt: { charCode: number, target: { value: string } }) => {
    if (evt.charCode === 13) {
      const rawInput = evt.target.value;
      const updateList = (input: string) => {
        try {
          return input.trim().split(',')
        } catch {
          return itemList
        }
      }
      const updatedItems = updateList(rawInput)
      const sanitizeTextList = (list: string[]) => {
        return list.filter(item => item.length > 0)
      }
      const sanitizedItems = sanitizeTextList(updatedItems)
      console.log(sanitizedItems)
      addToItemsList(sanitizedItems)
      setMode(TextAreaModes.view)
    }
  }
  const toggleMode = () => {
    setMode(TextAreaModes.view)
    if (TextAreaModes.view) {
      setMode(TextAreaModes.edit)
    }
  }

  console.log(mode)

  const checkItemValidity = (item: string, type: ShareableTypes) => {
    switch (type) {
      case ShareableTypes.twitterHandle:
      // TODO: handle validity check for twitter handle
      case ShareableTypes.fbUserName:
      // TODO: handle validity check for Facebook username
      default: {
        // Default shareable type is email
        return validateEmailAddress(item)
      }
    }
  }

  const displayItem = (item: string) => {
    if (checkItemValidity(item, ShareableTypes.email)) {
      return <StyledItem key={item}>
        {item} <RemoveIcon handleClick={() => handleRemoveItem(item)} />
      </StyledItem>
    } else {
      return <StyledInvalidItem>
        {item}
      </StyledInvalidItem>
    }
  }

  return mode && mode === TextAreaModes.view
    ? (<StyledTextAreaView
      onClick={toggleMode}
      onBlur={toggleMode}
    >
      {itemList && itemList.map((item) => {
        return displayItem(item)
      })}
    </StyledTextAreaView>)
    : (<StyledTextAreaEdit onBlur={toggleMode} onKeyPress={handleKeyPress} defaultValue={itemList && itemList.map((item) => {
      return item
    })} />
    )
}