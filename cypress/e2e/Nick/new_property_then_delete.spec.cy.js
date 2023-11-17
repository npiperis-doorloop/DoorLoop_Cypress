describe('Creates new property then deletes it', () => {

    it('Checks properties page and new property button is appearing', () => {
    
        cy.login()
        
    cy.getById('SideMenu-Main-Rentals').click();
    cy.getById('SideMenu-Rentals-Properties').click();

        cy.get('#screenScroll > div.DLUI_View.jss3.breadcrumbs-container > div.DLUI_View.jss3.screenTitle > div:nth-child(2) > button').should('contain', 'New Property').click()
    })
  })