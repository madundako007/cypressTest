/// <reference types="Cypress" />

describe("login", () => {

    it('it should be able to login ', () => {

        cy.login('mohammed@mailinator.com', 'mb02mn03')

        //Account information
        cy.contains('Account Information').should('exist').click()

        cy.scrollTo(0, 2000).wait(2000)
        cy.contains('First Name').should('exist')
        cy.contains('Last Name').should('exist')
        cy.contains('Email').should('exist')
        cy.contains('Mobile').should('exist')

        //Address Book
        cy.contains('Address Book').should('exist').click()
        cy.scrollTo(0, 1000).wait(2000)
        cy.contains('Address Book').should('exist')
        cy.contains('Add New Address').should('exist')
        cy.scrollTo(1000,).wait(2000)

        // Change Password
        cy.contains('Change Password').should('exist').click()
        cy.scrollTo(0, 1000).wait(2000)
        cy.contains('Change Password').should('exist')
        cy.contains('Update').should('exist')
        cy.scrollTo(1000, 0).wait(2000)
        //Order History
        cy.contains('Order History').should('exist').click().wait(4000)
        cy.scrollTo(0, 500).wait(2000)
        cy.contains('Order History').should('exist')
        cy.contains('Processing ()').should('exist')
        cy.contains('Dispatched ()').should('exist')


        cy.contains('Next').should('exist').click()
       
        cy.scrollTo(1000, 0).wait(3000)

        //Messages
        cy.contains('Messages').should('exist')

        cy.contains('Logout').should('exist')

        cy.contains('home').should('exist').click()
    })
})
