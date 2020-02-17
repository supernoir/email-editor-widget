import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { StyledContainer, GlobalStyle, StyledActionsWrapper } from "./style"
import { Button } from "./components/Button/template"
import { EmailInputWrapper } from './components/EmailInputWrapper/template'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/theme'
import { ShareableTypes } from './constants/enums'
import { getRandomEmailAddress } from './util/random'

interface AppProps {
	shareableItem?: string,
	shareableType?: string,
}

const App: React.FC<AppProps> = ({ shareableItem, shareableType }) => {
	const testListItems = [
		"example@mail.ru",
		"jane.doe@gmail.com",
		"johnny.appleseed@somelongdoma.in"
	]

	const [itemsCount, addToItemsCount] = useState(testListItems.length)
	const [itemsList, addToItemsList] = useState(testListItems)
	const defaultShareableItem = "My Miro Board"
	const defaultShareableType = ShareableTypes.email
	const getEmailButtonTranslation = `Add ${shareableType || defaultShareableType}`
	const getEmailCountButtonTranslation = `Get ${shareableType || defaultShareableType}s count`

	const addRandomEmails = () => {
		addToItemsList(itemsList.concat(getRandomEmailAddress()))
	}

	const getItemsCount = (set: string[]) => {
		addToItemsCount(set.filter(val => val).length)
		let alertText = ""
		if (itemsCount <= 0) {
			alertText = `There are currently no ${defaultShareableType}s in the list`
		} else if (itemsCount === 1) {
			alertText = `There is 1 ${defaultShareableType} in the list`
		} else {
			alertText = `There are ${itemsCount} ${defaultShareableType}s in the list`
		}
		alert(alertText);
	}

	return <React.Fragment>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<StyledContainer>
				<EmailInputWrapper shareableItem={defaultShareableItem} itemList={itemsList} />
				<StyledActionsWrapper>
					<Button onClick={addRandomEmails} label={getEmailButtonTranslation}></Button>
					<Button onClick={() => { getItemsCount(testListItems) }} label={getEmailCountButtonTranslation}></Button>
				</StyledActionsWrapper>
			</StyledContainer>
		</ThemeProvider>
	</React.Fragment >
}
export default App

ReactDOM.render(<App />, document.getElementById('email-editor-widget'))
