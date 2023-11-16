describe('template spec', () => {
    it('passes', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.login()
      cy.get('[data-cy="SideMenu-CreateNewMenu-Button"]').click()                                   //Select pink create new in the top left
      cy.get('[data-cy="SideMenu-CreateNewMenu-Property"]> .jss35').click()
      cy.get('[data-cy="NewProperty-Selection-Residential"] > .MuiButton-label > .jss35').click()
      cy.get('[data-cy="NewProperty-Selection-SingleFamily"] > .MuiButton-label > .jss35').click()
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('input[name="property.address.street1"]').click().type('Justin Norris')                   
      cy.get('input[name="property.address.city"]').click().type('Miami')
      cy.get('input[name="property.address.country"]').click().type('United States')
      cy.get('input[name="property.address.zip"]').click().type('33123')
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('input[name="units[0].name"]').click().type('Justin Norris')
      cy.get('[data-cy="units[0].beds"]').click().type('2')
      cy.get('[data-cy="units[0].baths"]').click().type('2')
      cy.get('[data-cy="units[0].size"]').click().type('1500')
      cy.get('[data-cy="units[0].marketRent"]').click().type('2500')
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[data-cy="NewProperty-DefaultAccountButton"]').click()                                 //Default operating accounting
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[data-cy="NewProperty-DisableReserveFunds"]').click()                                  //Disable Reserve funds
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[data-cy="NewProperty-Ownership-OwnedByMe"]').click()                                  //Owned by me
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[data-cy="PropertyDetails-NavigationBar-Units"]').click()  
      cy.get('[data-cy="DLUI-ListItemOptionsButton"]').click()                                       //Select three dots
      cy.get(':nth-child(7) > .DLUI_View > div > .jss35').click()                                    //Select delete
      cy.get('[data-cy="Tenant-Payments-MakeAnotherPayment"]').click()                               //Confirm delete of unit
      cy.wait(1000)
      cy.get('*[class="DLUI_View jss3 blueBackground blueLightBackgroundHover"]').click()            //Select three dots
      cy.get(':nth-child(5) > .DLUI_View > div > .jss35').click()                                    //Select delete
      cy.get('[data-cy="Tenant-Payments-MakeAnotherPayment"]').click()                               //Confirm delete of property

    })
  })