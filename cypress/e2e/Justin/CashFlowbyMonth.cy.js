describe('template spec', () => {
    it('passes', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.get('[data-cy="SideMenu-Main-Reports"]').click()
      cy.get(':nth-child(1) > [style="margin: 10px 0px 0px; padding: 0px; flex-flow: row; height: auto; width: 100%; align-items: flex-start; justify-content: flex-start; align-self: initial; max-width: none; max-height: none; flex: 0 0 auto; cursor: inherit; min-height: auto; border-radius: 0px; gap: 16px;"] > :nth-child(1) > :nth-child(7) > .reportScreenItem').click()
      for (var i = 1; i < 12; i++) {
      cy.get('.k-column-title').eq(i).should('contain', '2023-')
      }

    })
})
