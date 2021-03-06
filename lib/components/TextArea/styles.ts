import styled from "styled-components"

interface StyledTextAreaProps {
  onClick?: () => void,
  onBlur?: () => void,
  onFocus?: () => void,
  onPaste?: (evt: ({ stopPropagation?: any; preventDefault?: any; clipboardData?: any })) => void,
  onKeyPress?: (e: React.KeyboardEvent | { charCode: number }) => void,
  defaultValue?: string | string[],
  children?: React.ReactNode
}

export const StyledTextAreaView = styled.div`
  min-width: 220px;
  width: 100%;
  min-height: 120px;
  max-height: 220px;
  overflow-y: auto;
  height: inherit;

  margin: 0;
  border: 0;
  padding: 8px;

  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.border};
  box-sizing: border-box;
  border-radius: 4px;

  display: flex;
  flex-wrap: wrap;
` as React.FC<StyledTextAreaProps>

export const StyledTextAreaEdit = styled.textarea`
  min-width: 220px;
  width: 100%;
  min-height: 120px;
  max-height: 220px;
  overflow-y: auto;
  height: inherit;

  margin: 0;
  border: 0;
  padding: 8px;

  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.border};
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  max-height: 24px;
  line-height: 24px;
` as React.FC<StyledTextAreaProps>

export const StyledItem = styled.span`
  font-size: 14px;
  max-height: 24px;
  line-height: 24px;
  background: rgba(102, 153, 255, 0.2);
  border-radius: 100px;
  padding: 4px 12px;
  margin: 0 8px 0 0;
  :last-child {
    margin: 0;
  }
`

export const StyledInvalidItem = styled.span`
  font-size: 14px;
  max-height: 24px;
  line-height: 24px;
  background: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.error};
  padding: 4px 12px;
  margin: 0 8px 0 0;
  :last-child {
    margin: 0;
  }
`