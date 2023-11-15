describe('Checks login page is displaying correctly then logs in', () => {
  it('Navigates to DoorLoop login page and checks content', () => {
    cy.visit('https://app.doorloop.com')

    cy.url().should('include', '/auth/login')

    cy.get('#email').should('exist')
    cy.get('#password').should('exist')
  })

  it('Logs in to DoorLoop and checks if succesful', () => {
    cy.login()

    cy.get('#screenScroll > div > div.DLUI_View.jss3.filters-container > div > div.DLUI_View.jss3.FilterPanel > div > div > div > div:nth-child(2) > p').should('contain', 'Welcome Back!')
  })
})