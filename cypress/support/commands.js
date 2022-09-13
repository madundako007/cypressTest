
//LOGIN
Cypress.Commands.add('login', (email, currentPassword) => {
    cy.visit('/')
    cy.contains('Login/Create Account').should('exist').click().wait(3000)

    cy.get("input[name='email']").type(email)
    cy.get("input[name='currentPassword']").type(currentPassword)
    cy.contains('Recover Password').should('exist')
    cy.contains('button', 'Login').should('exist').click()
    cy.contains('My Account').should('exist').wait(6000)

    cy.contains('Account Information').should('exist')
    cy.scrollTo(0, 2000).wait(2000)
    cy.contains('Address Book').should('exist')
    cy.contains('Change Password').should('exist')

    cy.contains('Order History').should('exist')
    // cy.contains('Active Orders (').should('exist')
    // cy.contains('Settled Orders (').should('exist')

    cy.contains('Messages').should('exist')
    cy.contains('Logout').should('exist')
})

//SIGN UP
Cypress.Commands.add('signUp', (firstName, lastName, email, mobileNumber, password) => {
    cy.visit('/')
    cy.wait(1000)
    //create account
    cy.contains('Login/Create Account').should('exist').click().wait(4000)
    cy.contains('Login').should('exist')
    cy.contains('Sign Up').should('exist').click()

    cy.get('[name="firstName"]').type(firstName).wait(1000)
    cy.get('[name="lastName"]').type(lastName).wait(1000)
    cy.get('[name="email"]').type(email).wait(1000)
    cy.get('[name="mobileNumber"]').type(mobileNumber).wait(1000)
    cy.get('[name="password"]').type(password).wait(1000)

    cy.contains('Already have an account? `').should('exist')

    //create account
    // cy.contains('Create an Account').should('exist').submit()
    cy.get('button[type="submit"]')
        .should('be.visible')
        .click()

    cy.contains('Email already exists!').click().wait(2000)
    cy.contains('Login').click()
})

//ACCOUNT SETTING & HOME PAGE TESTING
Cypress.Commands.add('accountSettings', () => {
    cy.wait(6000)

    cy.contains('Logout').should('exist').wait(4000)
    cy.contains('Order History').should('exist')

    //update
    cy.contains('Shops', { timeout: 6000 }).should('exist').click()

    cy.contains('Yes, allow location').should('exist').click().wait(5000)

    //HOME PAGE 
    cy.get('nav > div > a > img').click().wait(3000)

})

//RECOVERY PASSWORD
Cypress.Commands.add('recoveryPassword', (email, newPassword, resetCode) => {
    cy.visit('/')
    cy.contains('Login/Create Account').should('exist').click().wait(2000)

    //click on recover password
    cy.contains('Recover Password').should('exist').click().wait(5000)
    cy.get('[name="email"]').type(email).wait(4000)
    cy.contains('Login').should('exist')
    cy.contains('Send Reset Link').should('exist').click().wait(3000)

    cy.get('[name="newPassword"]').type(newPassword).wait(2000)

    cy.get('[name="passwordResetCode"]').type(resetCode).clear().wait(20000)

    cy.contains('Update Password').click()
})

//SHOP
Cypress.Commands.add('Shop', (email, password, search, searchProduct) => {
    
    //HOME PAGE TESTING
    cy.contains('All Categories').should('exist')
    cy.contains('Automobile').should('exist')
    cy.contains('Beauty').should('exist')
    cy.contains('Pharmacy and Vet').should('exist')
    cy.contains('Computing').should('exist')
    cy.contains('Fashion').should('exist')
    cy.contains('Food and Beverages').should('exist')
    cy.contains('General Store').should('exist')
    cy.contains('Home/Office').should('exist')
    cy.contains('Hospitality').should('exist')

    cy.contains('Sports').should('exist')
    cy.contains('Others').should('exist')

    cy.contains('Products from popular Stores').should('exist')

    cy.scrollTo(0, 3000).wait(5000)

    cy.contains('Products you may like').should('exist')
    cy.contains('Stores on Timart').should('exist')
    cy.contains('Products from popular Stores').should('exist')
    cy.contains('Stay Updated with Latest Offers').should('exist')
    cy.contains('ABOUT TIMART').should('exist')
    cy.contains('BUYING ON TIMART').should('exist')
    cy.contains('MAKE MONEY ON TIMART').should('exist')
    cy.contains('DOWNLOAD APP & CONNECT WITH US').should('exist')
    
    
    cy.login(email, password).wait(6000)
    cy.contains('Shops').should('exist').click({force: true})
    cy.contains('Yes, allow location').should('exist').click()
    cy.wait(6000)

    //SEARCH
    cy.get('.input-field').type('keyy').click({ force: true} ).wait(4000)

    //TODO
    //Need to fix this, use name instead of class
    cy.contains('keyy').should('exist').click({ force: true}).wait(7000)

    cy.contains('Testing001').should('exist').click({ force: true }).wait(7000)

    //Add to cart
    cy.get('#add-to-cart').contains('Add To Cart').click({ force: true }).wait(4000)

    cy.contains('Descriptions').should('exist')
    cy.contains('Specifications').should('exist')
    cy.contains('Customer Reviews').should('exist')

    //Cart
    cy.get('.sc-iBzEeX').click().wait(4000)

    cy.contains('Order Summary').should('exist')
    cy.contains('Sub Total').should('exist')
    cy.contains('Total').should('exist')
    cy.contains('My Account').should('exist')
    cy.contains('Shops').should('exist')
    cy.contains('Transaction and delivery fees will be added at checkout').should('exist')

    //Buy product in cart
    cy.contains('Buy (').should('exist').click().wait(3000)

    cy.contains('Sub Total').should('exist')
    cy.contains('Total').should('exist')
    cy.contains('Pay on Delivery').should('exist')
    cy.contains('Pay Now').should('exist')
    cy.contains('Payment Options').should('exist')

    // pay now
    cy.contains('Pay Now').should('exist').click()

    //Continue to Payment
    //Show paystack payment method
    cy.contains('Continue to Payment').should('exist').click().wait(7000)
    
    cy.contains('div','.checkout').should('have.class', 'Success').click().wait(4000)
    // cy.get('div > .checkout').contains('Success').should('be.visible').check().wait(4000)
    
    //home page
    cy.get('div > span > .sc-iTVJFM').click().wait(2000)
    cy.contains('Shops').should('exist').click().wait(4000)

    cy.get(':nth-child(3) > svg').click().wait(3000)

    //Cart
    // cy.get('.sc-ciZhAO').click().wait(2000)

    // //Buy product in cart
    // cy.contains('Buy (').should('exist').click().wait(3000)

    // // Address 
    // cy.contains('Change Address').should('exist').click()
    // cy.get('.sc-igHpSv > span').click(2000)
    // cy.contains('Address Form').should('exist')
    // cy.get('[name="address"]').type('Tunga').wait(1000)

    // //select state
    // cy.get('.sc-eXBvqI').select('Niger')
    // cy.get(':nth-child(2) > .sc-gkJlnC').type('Minna')
    // cy.get('[name="country"]').type('Nigeria').wait(2000)

    // //Continue payment 
    // // cy.contains('Continue').should('exist').click(2000)
    // cy.get('.sc-ddcaxn').click().wait(2000)

    // // Pay on delivery
    // cy.get(':nth-child(2) > .sc-fWIMVQ > span').click().wait(2000)


    // // //checkout payment 
    // cy.get('.sc-hsOonA').click(5000).pause()

    // //Continue shopping after order completed
    // //Finish
    // cy.get('.sc-iqGgem').click(2000)

    //--------

    //------------
    //Pick up from store 
    //Already on default
    // cy.contains('Change Address').should('exist')

})