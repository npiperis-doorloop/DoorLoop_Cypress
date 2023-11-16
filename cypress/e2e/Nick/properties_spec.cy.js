describe('Checks Rentals -> Properties page content', () => {

    it('Checks properties page and new property button is appearing', () => {
      
      cy.getById('SideMenu-Main-Rentals').click();
      cy.getById('SideMenu-Rentals-Properties').click();
  
    })
  })