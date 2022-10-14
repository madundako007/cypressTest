/// <reference types="Cypress" />

describe('signUP', () => {
    it('it should be able to sign up ', () => {
        cy.dashboard()
        cy.signUp('mohammed', 'ndako', 'mohammed@mailinator.com', '07065857928', 'mb02mn03')
    })
})
