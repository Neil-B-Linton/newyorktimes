describe('Details Page', () => {
  beforeEach('a user should see a details page', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=YUB09xwrCV2grcQuBoT36bRu9oKBTLNW')
    cy.get('.Link').eq(0).click()
  })
  it('Should display a details page to the user', () => {
    cy.get('.DetailsTitle').should('be.visible')
    cy.get('.DetailsImg').should('be.visible')
    cy.get('.DetailsByline').should('be.visible')
    cy.get('.DetailsContainer > :nth-child(4)').should('be.visible')
    cy.get('.DetailsContainer > :nth-child(5)').should('be.visible')
    cy.get('.DetailsContainer > :nth-child(5)').should('be.visible')
  })
})