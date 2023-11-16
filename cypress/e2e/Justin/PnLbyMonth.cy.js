describe('template spec', () => {
    it('passes', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      
      cy.get('[data-cy="SideMenu-Main-Reports"]').click()
      
      cy.get('[style="margin: 0px; padding: 0px; flex-flow: column; height: auto; width: 100%; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: 16px;"] > :nth-child(1) > [style="margin: 10px 0px 0px; padding: 0px; flex-flow: row; height: auto; width: 100%; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: 16px;"] > :nth-child(2) > :nth-child(2) > .reportScreenItem > [style="margin: 0px; padding: 0px; flex-flow: column; height: auto; width: auto; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 1 1 0%; cursor: pointer; min-height: auto; border-radius: 0px; gap: unset;"] > [style="font-size: 16px;"]').click()
      cy.contains('2023-01')
      cy.contains('2023-02')
      cy.contains('2023-03')
      cy.contains('2023-04')
      cy.contains('2023-05')
      cy.contains('2023-06')
      cy.contains('2023-07')
      cy.contains('2023-08')
      cy.contains('2023-09')
      cy.contains('2023-10')
      cy.contains('2023-11')

    })
  })