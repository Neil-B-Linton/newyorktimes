describe('HomePage', () => {
  beforeEach('a user should see a home page', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=YUB09xwrCV2grcQuBoT36bRu9oKBTLNW')

  })
  it('Should display a title to the user', () => {
    cy.get('h1').should('be.visible')
  })
  it('Should title should be clickable', () => {
    cy.get('h1').click()
  })
  it('Should display cards to the user', () => {
    cy.get('.Link').should('be.visible')
  })
})