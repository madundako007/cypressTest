/// <reference types="Cypress" />

describe("RecoveryPassword", () => {
    it('it should be able to reset your password', () => {
            cy.visit('https://staging.tmart.com.ng/')
            cy.contains('Login/Create Account').should('exist').click().wait(3000)

            //    click on recover password
            cy.contains('Recover Password').should('exist').click().wait(5000)

            cy.url().should('eq', 'https://staging.tmart.com.ng/auth?type=recoverPassword')

            cy.get('[name="email"]').type('mohammed@mailinator.com').wait(4000)
            cy.contains('Login').should('exist')
            cy.contains('Send Reset Link').should('exist').click().wait(3000)

            cy.get('[name="newPassword"]').type('mb02mn03').wait(2000)

            cy.get('[name="passwordResetCode"]').type("3535").clear().wait(20000)

            cy.contains('Update Password').click()
    })
})