/// <reference types="Cypress" />

describe("recoveryPassword", () => {
  it('it should be able to reset your password', () => {

    cy.dashboard()
    cy.contains('Login/Create Account').should('exist').wait(3000).click()

    cy.recoveryPassword('mohammed@mailinator.com', 'password', 'passwordResetCode')
  })
})