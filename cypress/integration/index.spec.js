const baseUrl = 'http://localhost:8080'

describe('App', () => {
	it('handles a click on add email', () => {
		cy.visit(baseUrl)
		cy.contains('Add email').click()
	})
	it('handles a click on Get emails count', () => {
		cy.visit(baseUrl)
		cy.contains('Get emails count').click()
	})
})
