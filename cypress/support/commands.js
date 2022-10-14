Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')

    cy.contains('Login/Create Account').should('exist').click().wait(3000)

    cy.get("input[name='email']").type(email)
    cy.scrollTo(0, 0)
    cy.get("input[name='currentPassword']").type(password)
    cy.contains('Recover Password').should('exist')
    cy.contains('button', 'Login').should('exist').click()
    cy.contains('My Account').should('exist').wait(3000)

})

Cypress.Commands.add('signUp', (firstName, lastName, email, phoneNumber, password) => {
    cy.contains('Sign Up').should('exist').click()

    cy.url().should('eq', 'https://staging.tmart.com.ng/auth?type=signup')

    cy.get('[name="firstName"]').type(firstName).wait(1000)
    cy.get('[name="lastName"]').type(lastName).wait(1000)
    cy.get('[name="email"]').type(email).wait(1000)

    cy.get('[name="mobileNumber"]').type(phoneNumber).wait(1000)
    cy.get('[name="password"]').type(password).wait(1000)

    cy.contains('Already have an account? `').should('exist')

    //create account
    cy.get('button[type="submit"]')
        .should('be.visible')
        .click()

    cy.contains('Email already exists!').should('not.exist')

    cy.contains('Login').click()
    cy.url().should('include', 'https://staging.tmart.com.ng/auth?type=login')
})

Cypress.Commands.add('dashboard', () => {
    cy.visit('https://staging.tmart.com.ng/')
    cy.contains('Login/Create Account').should('exist').click().wait(3000)
    cy.contains('Login').should('exist')
})

Cypress.Commands.add('recoveryPassword', (email, password, passwordResetCode) => {

    cy.contains('Recover Password', { timeout: 5000 }).should('exist').click()

    cy.url().should('eq', 'https://staging.tmart.com.ng/auth?type=recoverPassword')

    cy.get('[name="email"]', { timeout: 4000 }).type(email)
    cy.contains('Login').should('exist')
    cy.contains('Send Reset Link').should('exist').click()

    cy.get('[name="newPassword"]', { timeout: 2000 }).type(password)

    cy.get('[name="passwordResetCode"]', { timeout: 20000 }).type(passwordResetCode).clear()
    cy.scrollTo(0, 0, { delay: 100 })

    cy.contains('Update Password').click()
    cy.scrollTo(0, 0, { delay: 100 })
})