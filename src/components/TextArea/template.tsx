import React, { useState } from 'react'
import { StyledTextAreaView, StyledTextAreaEdit, StyledItem } from './styles'

interface TextAreaProps {
  itemList: string[]
}

enum TextAreaModes {
  edit = "edit",
  view = "view"
}

export const TextArea: React.FC<TextAreaProps> = ({ itemList }) => {
  const [mode, setMode] = useState(TextAreaModes.view)


  const handleKeyPress = (event: { charCode: number }) => {
    if (event.charCode === 13) {
      setMode(TextAreaModes.view)
    }
  }
  const handleMouseClick = () => {
    setMode(TextAreaModes.edit)
  }

  return mode && mode === TextAreaModes.view
    ? (<StyledTextAreaView onClick={handleMouseClick}>
      {itemList && itemList.map((item, index) => {
        return <StyledItem key={`${item}-${index}`}>
          {item}
        </StyledItem>
      })}
    </StyledTextAreaView>)
    : (<StyledTextAreaEdit onKeyPress={handleKeyPress} value={itemList && itemList.map((item) => {
      return item
    })} />
    )
}