describe('template spec', () => {
    it('passes', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      
      cy.get('[data-cy="SideMenu-CreateNewMenu-Button"]').click() 
      cy.get('[data-cy="SideMenu-CreateNewMenu-Lease"]').click()
      cy.get('#AsyncAutoComplete0').click()
      cy.get('#AsyncAutoComplete0-option-0 > .DLUI_View').click()
      cy.get('#AsyncAutoComplete1').click()
      cy.get('#AsyncAutoComplete1-option-1 > .DLUI_View').click()
      cy.get('[data-cy="NewLease-LeaseTerms-FixedTerm"]').click()
      cy.get('[data-cy="NewLease-LeaseTerms-StartDate"] > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.get(':nth-child(1) > .MuiButton-label > .MuiTypography-root').click()
      cy.get(':nth-child(128)').click()
      cy.get('.MuiPickersMonthSelection-container > :nth-child(10)').click()
      cy.get(':nth-child(4) > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').click()
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[data-cy="NewLease-LeaseTenants-AddTenantButton"]').click()
      cy.get(':nth-child(1) > [data-cy="DLUI-ListItem"] > .jss367 > .listItemGrid > :nth-child(1) > [style="margin: 0px; padding: 0px; flex-flow: row; height: 100%; width: 100%; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: pointer; min-height: auto; border-radius: 0px; gap: unset;"] > [style="margin: 0px; padding: 0px; flex-flow: wrap; height: 100%; width: auto; align-items: center; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 1 1 0%; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"]').click()
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get(':nth-child(4) > span > .MuiTypography-root > .DLUI_View > .jss35').click()
      cy.get(':nth-child(1) > span[style="width: auto;"] > .MuiTypography-root > .DLUI_View > .jss35').click()
      cy.get('#AsyncAutoComplete3').click()
      cy.get('#AsyncAutoComplete3-option-4 > .DLUI_View').click()
      cy.get(':nth-child(3) > [style="margin: 0px; padding: 0px; flex-flow: column wrap; height: auto; width: 100%; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > .DLUI_NumberFormat > [data-cy="rentCharges[0].lines[0].amount"] > .MuiInputBase-root > .MuiInputBase-input').click().type(90000)
      cy.get('[data-cy="rentCharges[0].lines[1].amount"] > .MuiInputBase-root > .MuiInputBase-input').click().type(90)
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[data-cy="NewLease-SecurityDeposit-DisableDeposit"]').click()
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[data-cy="NewLease-SignatureStatus-SignedButton"]').click()
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('*[class="DLUI_View jss3 blueBackground blueLightBackgroundHover"]').click()            //Select three dots
      cy.get('*[class="jss35 jss27 jss46"]').click()
      cy.get('[data-cy="Tenant-Payments-MakeAnotherPayment"]').click()
    })
})