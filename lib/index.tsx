import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { StyledContainer, GlobalStyle, StyledActionsWrapper } from "./styles/style"
import { Button } from "./components/Button/template"
import { EmailInputWrapper } from './components/EmailInputWrapper/template'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/theme'
import { ShareableTypes } from './constants/enums'
import { getRandomEmailAddress } from './util/random'
import { ItemList } from './types'

interface AppProps {
	shareableItem?: string,
	shareableType?: string,
	setEmailsList: (payload: ItemList) => void,
	getEmailsList: ItemList,
	toggleChangeSubscription: () => void
}

const App: React.FC<AppProps> = ({ shareableItem, shareableType }) => {

	const [itemsCount, addToItemsCount] = useState(0)
	const [itemsList, setItemsList] = useState(new Array)
	const [isSubscribed, toggleSubscription] = useState(false)
	const defaultShareableItem = "My Miro Board"
	const defaultShareableType = ShareableTypes.email
	const getEmailButtonTranslation = `Add ${shareableType || defaultShareableType}`
	const getEmailCountButtonTranslation = `Get ${shareableType || defaultShareableType}s count`

	const setEmailsList = (payload: ItemList) => {
		addToItemsList(payload)
	}

	const getEmailsList = () => {
		return itemsList
	}

	const toggleChangeSubscription = () => {
		let currentState = isSubscribed
		toggleSubscription(!currentState)
	}

	const triggerChangeEvent = (newState: ItemList) => {
		if (isSubscribed) {
			return newState
		}
	}

	const addRandomEmails = () => {
		setItemsList(itemsList.concat(getRandomEmailAddress()))
		triggerChangeEvent(itemsList)
	}

	const addToItemsList = (list: ItemList) => {
		let currentList = itemsList
		setItemsList(currentList.concat(list))
		triggerChangeEvent(itemsList)
	}

	const removeItemFromList = (itemToBeRemoved: string) => {
		setItemsList(itemsList.filter(currentItem => currentItem !== itemToBeRemoved))
		triggerChangeEvent(itemsList)
	}

	const getItemsCount = () => {
		let currentItemsCount = itemsList.filter(val => val).length
		addToItemsCount(currentItemsCount)
		alertItemsCount(currentItemsCount)
	}

	const alertItemsCount = (count: number) => {
		let alertText = `There are ${count} ${defaultShareableType}s in the list`
		if (count <= 0) {
			alertText = `There are currently no ${defaultShareableType}s in the list`
		} else if (count === 1) {
			alertText = `There is 1 ${defaultShareableType} in the list`
		}
		alert(alertText);
	}

	return <React.Fragment>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<StyledContainer>
				<EmailInputWrapper
					shareableItem={defaultShareableItem}
					itemList={itemsList}
					removeItemFromList={removeItemFromList}
					addToItemsList={addToItemsList}
				/>
				<StyledActionsWrapper>
					<Button onClick={addRandomEmails} label={getEmailButtonTranslation}></Button>
					<Button onClick={getItemsCount} label={getEmailCountButtonTranslation}></Button>
				</StyledActionsWrapper>
			</StyledContainer>
		</ThemeProvider>
	</React.Fragment >
}
export default App

ReactDOM.render(<App
	setEmailsList={App.prototype.setEmailsList}
	getEmailsList={App.prototype.getEmailsList}
	toggleChangeSubscription={App.prototype.toggleChangeSubscription} />, document.getElementById('email-editor-widget'))
