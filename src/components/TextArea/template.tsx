import React, { useState } from 'react'
import { StyledTextAreaView, StyledTextAreaEdit, StyledItem, StyledInvalidItem } from './styles'
import { RemoveIcon } from '../RemoveIcon/template'
import { ShareableTypes } from '../../constants/enums'
import { validateEmailAddress } from '../../util/validity'
import { Item, ItemList } from '../../types'

interface TextAreaProps {
  itemList: ItemList,
  removeItemFromList: (item: Item) => void,
  addToItemsList: (items: ItemList) => void
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

  const handlePaste = (evt: {
    stopPropagation: () => void
    preventDefault: () => void,
    clipboardData: { getData: (type: string) => ItemList }
  }) => {
    evt.stopPropagation();
    evt.preventDefault();

    let { clipboardData } = evt
    let pastedData = clipboardData.getData('Text');
    if (mode && mode === TextAreaModes.edit) {
      addToItemsList(pastedData)
      setMode(TextAreaModes.view)
    } else {
      setMode(TextAreaModes.edit)
    }
  }

  const handleKeyPress = (evt: { charCode: number, target: { value: string } }) => {
    if (evt.charCode === 13) {
      const rawInput = evt.target.value;
      const updateList = (input: string) => {
        try {
          return input.trim().replace(/[&\/\\#+()$~%'"“”​:*?<>{}]/g, '').split(',')
        } catch {
          return itemList
        }
      }
      const updatedItems = updateList(rawInput)

      const sanitizeTextList = (list: ItemList) => {
        return list.filter(item => item.trim().length > 0)
      }
      const sanitizedItems = sanitizeTextList(updatedItems)

      const mergeLists = (oldList: ItemList, newList: ItemList) => oldList.concat(newList)

      const dedupeLists = (oldList: ItemList, newList: ItemList) => {
        return newList.filter((item) => {
          return oldList.indexOf(item) === -1;
        });
      }

      const dedupedItemList = dedupeLists(itemList, sanitizedItems)
      console.log(dedupedItemList)
      const mergedItemList = mergeLists(itemList, dedupedItemList)
      console.log(mergedItemList)
      const uniqueItemList = dedupeLists(dedupedItemList, dedupedItemList)
      console.log(uniqueItemList)
      addToItemsList(mergedItemList)
      setMode(TextAreaModes.view)
    }
  }
  const toggleMode = () => {
    setMode(TextAreaModes.view)
    if (TextAreaModes.view) {
      setMode(TextAreaModes.edit)
    }
  }

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

  const displayItem = (item: string, index: number) => {
    if (checkItemValidity(item, ShareableTypes.email)) {
      return <StyledItem key={`${item}-${index}`}>
        {item} <RemoveIcon handleClick={() => handleRemoveItem(item)} />
      </StyledItem>
    } else {
      return <StyledInvalidItem>
        {item} <RemoveIcon handleClick={() => handleRemoveItem(item)} />
      </StyledInvalidItem>
    }
  }

  return mode && mode === TextAreaModes.view
    ? (<StyledTextAreaView
      onClick={toggleMode}
      onBlur={toggleMode}
    >
      {itemList && itemList.map((item, index) => {
        return displayItem(item, index)
      })}
    </StyledTextAreaView>)
    : (<StyledTextAreaEdit onPaste={handlePaste} onBlur={toggleMode} onKeyPress={handleKeyPress} defaultValue={itemList && itemList.map((item) => {
      return item
    })} />
    )
}