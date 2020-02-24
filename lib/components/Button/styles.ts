import styled from 'styled-components'

export const StyledButton = styled.button`
  /** Resetting default <button> styles */
  box-shadow: 0;
  outline: 0;
  border: 0;

  /** Custom button styles */
  background:  ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 8px 16px;
  margin: 0 16px 0 0;
  :last-child {
    margin: 0;
  }
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
`