/// <reference types="Cypress" />

describe('Account Settings', () => {
    // beforeEach(() => {
    //     cy.visit('/')
    // })
    it('it should be able to check the settings page ', () => {
        cy.login('mohammed@mailinator.com', 'mb02mn03')
        cy.accountSettings()
    })
})