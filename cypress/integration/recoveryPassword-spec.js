/// <reference types="Cypress" />

describe("recoveryPassword", () => {
  it('it should be able to reset your password', () => {
    cy.dashboard()
    cy.recoveryPassword('mohammed@mailinator.com', 'password', 'passwordResetCode')
  })
})