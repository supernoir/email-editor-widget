import React from 'react'
import ReactDOM from 'react-dom'
import { StyledContainer, GlobalStyle, StyledEmailInputWrapper, StyledActionsWrapper } from "./style"
import { Button } from "./components/Button/template"
import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/theme'
const App: React.FC = () => {
	const getShareItemTranslation = (shareItem: string) => `Share ${shareItem} with others`
	const getEmailButtonTranslation = `Add emails`
	const getEmailCountButtonTranslation = `Get Emails count`

	return <React.Fragment>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<StyledContainer>

				<StyledEmailInputWrapper>
					<h1>{getShareItemTranslation("Board Name")}</h1>
					<textarea>example@mail.com</textarea>
				</StyledEmailInputWrapper>
				<StyledActionsWrapper>
					<Button onClick={(evt: any) => { console.log(evt) }} label={getEmailButtonTranslation}></Button>
					<Button onClick={(evt: any) => { console.log(evt) }} label={getEmailCountButtonTranslation}></Button>
				</StyledActionsWrapper>
			</StyledContainer>
		</ThemeProvider>
	</React.Fragment>
}
export default App

ReactDOM.render(<App />, document.getElementById('email-editor-widget'))
