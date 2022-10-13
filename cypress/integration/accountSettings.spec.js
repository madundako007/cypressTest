/// <reference types="Cypress" />

describe('Account Settings', () => {

    it('it should be able to check the settings page ', () => {
        // cy.visit('https://staging.tmart.com.ng/')
        // cy.contains('Login/Create Account').should('exist').click().wait(3000)

        // cy.get("input[name='email']").type('mohammed@mailinator.com')
        // cy.get("input[name='currentPassword']").type('mb02mn03')
        // cy.contains('Recover Password').should('exist')
        // cy.contains('button', 'Login').should('exist').click()
        // cy.contains('My Account').should('exist').wait(3000)
        cy.login('mohammed@mailinator.com', 'mb02mn03')

        //Account informationz
        cy.contains('Account Information').should('exist').click()

        cy.contains('Logout').should('exist').wait(4000)

        cy.contains('Order History').should('exist')

        //update
        cy.contains('Shops', { timeout: 6000 }).should('exist').click()

        cy.contains('Yes, allow location').should('exist').click().wait(5000)

        //HOME PAGE 
        cy.get('nav > div > a > img').click().wait(3000)
    })
})
