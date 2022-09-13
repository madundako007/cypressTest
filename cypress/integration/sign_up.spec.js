/// <reference types="Cypress" />

describe('webpage', () => {
    it('it should be able to sign up ', () => {
        cy.signUp('mohammed', 'ndako', 'mohammed@mailinator.com', '07065857928', 'Niger', 'Minna', 'mb02mn03')
    })
})