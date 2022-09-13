/// <reference types="Cypress" />

describe('Login', () => {
    // beforeEach(() => {
    //     cy.visit('/')
    // })

    it('it should be able to login ', () => {
        cy.login('mohammed@mailinator.com', 'mb02mn03')
    })
})