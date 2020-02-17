const baseUrl = 'http://localhost:8080'

describe('App', function() {
	it('handles a click on add email', function() {
		cy.visit(baseUrl)
		cy.contains('Add email').click()
	})
	it('handles a click on Get emails count', function() {
		cy.visit(baseUrl)
		cy.contains('Get emails count').click()
	})
})
