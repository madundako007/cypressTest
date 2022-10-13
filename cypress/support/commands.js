Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://staging.tmart.com.ng/')

    cy.contains('Login/Create Account').should('exist').click().wait(3000)

    cy.get("input[name='email']").type(email)
    cy.get("input[name='currentPassword']").type(password)
    cy.contains('Recover Password').should('exist')
    cy.contains('button', 'Login').should('exist').click()
    cy.contains('My Account').should('exist').wait(3000)

})

Cypress.Commands.add('Account', () => {

})

Cypress.Commands.add('SignUp', () => {

})