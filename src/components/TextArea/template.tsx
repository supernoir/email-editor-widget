import React, { useState } from 'react'
import { StyledTextAreaView, StyledTextAreaEdit, StyledItem, StyledInvalidItem } from './styles'
import { RemoveIcon } from '../RemoveIcon/template'
import { ShareableTypes } from '../../constants/enums'
import { validateEmailAddress } from '../../util/validity'

interface TextAreaProps {
  itemList: string[],
  removeItemFromList: (item: string) => void
}

enum TextAreaModes {
  edit = "edit",
  view = "view"
}

export const TextArea: React.FC<TextAreaProps> = ({ itemList, removeItemFromList }) => {
  const [mode, setMode] = useState(TextAreaModes.view)

  const handleRemoveItem = (item: string) => {
    console.log(`${item} will be removed`)
    removeItemFromList(item)
  }

  const appendToList = (list: string[], item: string) => {
    return list.push(item)
  }

  const handleKeyPress = (event: { charCode: number }) => {
    if (event.charCode === 13) {
      setMode(TextAreaModes.view)
    }
  }
  const handleMouseClick = () => {
    setMode(TextAreaModes.edit)
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
    ? (<StyledTextAreaView onClick={handleMouseClick}>
      {itemList && itemList.map((item) => {
        return displayItem(item)
      })}
    </StyledTextAreaView>)
    : (<StyledTextAreaEdit onKeyPress={handleKeyPress} value={itemList && itemList.map((item) => {
      return item
    })} />
    )
}