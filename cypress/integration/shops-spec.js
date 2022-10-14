/// <reference types="Cypress" />

it('it should be able to see all shops ', () => {
 
  cy.login('mohammed@mailinator.com', 'mb02mn03')

  //home page
  cy.get('.sc-jcwpoC').click().wait(2000)

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

  cy.scrollTo(5, 3000, { delay: 100 }).wait(2000)

  cy.contains('Products you may like').should('exist')
  cy.contains('Stores on Timart').should('exist')
  cy.contains('Products from popular Stores').should('exist')
  cy.contains('Stay Updated with Latest Offers').should('exist')
  cy.contains('ABOUT TIMART').should('exist')
  cy.contains('BUYING ON TIMART').should('exist')
  cy.contains('MAKE MONEY ON TIMART').should('exist')
  cy.contains('DOWNLOAD APP & CONNECT WITH US').should('exist')

  cy.contains('Shops').should('exist').click({ force: true })
  cy.contains('Yes, allow location').should('exist').click()
  cy.wait(3000)


  //next page
  cy.get(':nth-child(3) > .sc-EZqKI > svg').click().wait(5000)
  cy.url().should('eq', 'https://staging.tmart.com.ng/merchant/2')

  //back 
  cy.get(':nth-child(1) > .sc-EZqKI > svg').click().wait(5000)
  cy.url().should('eq', 'https://staging.tmart.com.ng/merchant/1')

  //SEARCH
  cy.get('.input-field').type('Great Star{Enter}').wait(4000)

  cy.contains('Great Star').should('exist').click(3000)
  
  cy.scrollTo(5, 3000, { delay: 100 }).wait(2000)
  
  //TODO
  //Need to fix this, use name instead of class
  cy.contains('Coke').should('exist').click({ force: true }).wait(7000)

  //Add to cart
  cy.get(' #add-to-cart', { timeout: 4000 }).contains('Add To Cart').click({ force: true })

  cy.contains('Descriptions').should('exist')
  cy.contains('Specifications').should('exist')
  cy.contains('Customer Reviews').should('exist')

  //Cart
  cy.get('.sc-iBzEeX', { timeout: 4000 }).click()

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
  cy.contains('Continue to Payment').should('exist').click().wait(8000)

  // cy.get('.cards > card').should('exist').click({force: true})
  cy.get('div > .cards > .card').should('be.visible').click({force: true})
  // cy.contains('.cards > .card').parent('div').find('.card__details').check()

  //home page
  cy.get('div > span > .sc-iTVJFM', { timeout: 3000 }).click()
  cy.contains('Shops').should('exist').click()

  cy.get(':nth-child(3) > svg', { timeout: 3000 }).click()

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

  //     // // Pay on delivery
  //     // cy.get(':nth-child(2) > .sc-fWIMVQ > span').click().wait(2000)


  //     // // //checkout payment 
  //     // cy.get('.sc-hsOonA').click(5000).pause()

  //     // //Continue shopping after order completed
  //     // //Finish
  //     // cy.get('.sc-iqGgem').click(2000)

  //     //--------

  //     //------------
  //     //Pick up from store 
  //     //Already on default
  //     // cy.contains('Change Address').should('exist')

})