/// <reference types="Cypress" />

describe('Recovery Password', () => {
    it('it should be able to reset your password', () => {
        cy.recoveryPassword('mohammedlndako@gmail.com', '123456', '123')
    })
})