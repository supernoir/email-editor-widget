import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { StyledContainer, GlobalStyle, StyledActionsWrapper } from "./style"
import { Button } from "./components/Button/template"
import { EmailInputWrapper } from './components/EmailInputWrapper/template'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/theme'

interface AppProps {
	shareableItem?: string
}

const App: React.FC<AppProps> = (shareableItem) => {
	const defaultShareableItem = "My Miro Board"
	const getEmailButtonTranslation = `Add emails`
	const getEmailCountButtonTranslation = `Get Emails count`

	const testListItems = [
		"example@mail.ru",
		"jane.doe@gmail.com",
		"johnny.appleseed@somelongdoma.in"
	]

	return <React.Fragment>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<StyledContainer>
				<EmailInputWrapper shareableItem={defaultShareableItem} itemList={testListItems}>
				</EmailInputWrapper>
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
