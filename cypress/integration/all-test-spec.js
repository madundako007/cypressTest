/// <reference types="Cypress" />

describe('dashboard', () => {

    it('it should be able to reset your password', () => {
        cy.dashboard()
        cy.contains('Login/Create Account').should('exist').wait(3000).click()
        cy.recoveryPassword('mohammed@mailinator.com', 'password', 'passwordResetCode')
    })

    it('it should be able to check dashboard ', () => {
        cy.dashboard()
    })

    it('it should be able to sign up ', () => {
        cy.dashboard()
        cy.contains('Login/Create Account').should('exist').wait(3000).click()
        cy.signUp('mohammed', 'ndako', 'mohammed@mailinator.com', '07065857928', 'mb02mn03')
    })

    it('it should be able log out', () => {
        cy.dashboard()
        cy.login('mohammed@mailinator.com', 'mb02mn03')
        cy.contains('Logout').should('exist').click()
    })

    it('it should be able to login ', () => {
        cy.login('mohammed@mailinator.com', 'mb02mn03')
    })


})

