describe('template spec', () => {
    it('passes', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

      cy.get('[data-cy="SideMenu-CreateNewMenu-Button"]').click()
      cy.get('[data-cy="SideMenu-CreateNewMenu-OwnerDistribution"]').click()
      
      cy.get(':nth-child(2) > [data-cy="step1.propertiesButtonSelection"] > .MuiButtonBase-root').click()
      cy.get('#AsyncAutoCompletestep1FilterProperties').click()
      cy.get('#AsyncAutoCompletestep1FilterProperties-option-7 > .MuiBox-root > [style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; white-space: normal; -webkit-line-clamp: 2; -webkit-box-orient: vertical; width: 100%; line-break: auto; direction: ltr;"] > .jss35').click()

      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
      //cy.get('.MuiAccordionSummary-expandIcon > :nth-child(1) > .DLUI_View > .DLUI_shake > .MuiButtonBase-root').click()
      //cy.get('#SelectpaymentMethod').click()                            //Select payment method
      //cy.get('[data-value="EPAY"]').click()                             //ePay
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: wrap; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: unset;"] > div.DLUI_shake > .MuiButtonBase-root').click()
    











    })
})