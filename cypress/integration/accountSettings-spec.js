/// <reference types="Cypress" />

describe('account Settings', () => {

    it('it should be able to check the settings page ', () => {

        cy.login('mohammed@mailinator.com', 'mb02mn03')

        //Account informationz
        cy.contains('Account Information').should('exist').click()

        cy.contains('Logout').should('exist').wait(4000)

        cy.contains('Order History').should('exist')

        //update
        cy.contains('Shops', { timeout: 6000 }).should('exist').click()

        cy.contains('Yes, allow location', {timeout: 5000}).should('exist').click()

        //HOME PAGE 
        cy.get('nav > div > a > img', {timeout: 3000}).click()
        // cy.get('.sc-jcwpoC kyvWZW', {timeout: 3000}).click()
    })
})
