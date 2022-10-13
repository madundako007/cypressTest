/// <reference types="Cypress" />

describe('SignUP', () => {
    it('it should be able to sign up ', () => {
    cy.visit('https://staging.tmart.com.ng/')
    cy.contains('Login/Create Account').should('exist').click().wait(4000)
    cy.contains('Login').should('exist')
    cy.contains('Sign Up').should('exist').click()

    cy.url().should('eq', 'https://staging.tmart.com.ng/auth?type=signup')

    cy.get('[name="firstName"]').type('mohammed').wait(1000)
    cy.get('[name="lastName"]').type('ndako').wait(1000)
    cy.get('[name="email"]').type('jayzee@mailinator.com').wait(1000)

    cy.get('[name="mobileNumber"]').type('07065857928').wait(1000)
    cy.get('[name="password"]').type('mb02mn03').wait(1000)

    cy.contains('Already have an account? `').should('exist')

    //create account
    cy.get('button[type="submit"]')
        .should('be.visible')
        .click()

        cy.contains('Email already exists!').should('not.exist')

    cy.contains('Login').click()
    cy.url().should('include', 'https://staging.tmart.com.ng/auth?type=login')
})
})
