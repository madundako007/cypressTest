/// <reference types="Cypress" />

describe("logOut", () => {
    it('it should be able to reset your password', () => {
      cy.dashboard()
      cy.login('mohammed@mailinator.com', 'mb02mn03')
      cy.contains('Logout').should('exist').click()
    })
  })