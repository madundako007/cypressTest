/// <reference types="Cypress" />

describe('signUP', () => {
    it('it should be able to sign up ', () => {
        cy.dashboard()
        cy.contains('Login/Create Account').should('exist').wait(3000).click()
        cy.signUp('mohammed', 'ndako', 'mohammed@mailinator.com', '07065857928', 'mb02mn03')
    })
})
