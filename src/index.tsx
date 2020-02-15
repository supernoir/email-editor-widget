import React from 'react'
import ReactDOM from 'react-dom'
import { StyledContainer, GlobalStyle, StyledButton, StyledEmailInputWrapper, StyledActionsWrapper } from "./style"

const App: React.FC = () => {
	const getShareItemTranslation = (shareItem: string) => `Share ${shareItem} with others`
	const getEmailButtonTranslation = `Add emails`
	const getEmailCountButtonTranslation = `Get Emails count`

	return <React.Fragment>
		<GlobalStyle />
		<StyledContainer>
			<StyledEmailInputWrapper>
				<h1>{getShareItemTranslation("Board Name")}</h1>
				<textarea>example@mail.com</textarea>
			</StyledEmailInputWrapper>
			<StyledActionsWrapper>
				<StyledButton>{getEmailButtonTranslation}</StyledButton>
				<StyledButton>{getEmailCountButtonTranslation}</StyledButton>
			</StyledActionsWrapper>
		</StyledContainer>
	</React.Fragment>
}
export default App

ReactDOM.render(<App />, document.getElementById('email-editor-widget'))
