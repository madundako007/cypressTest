/// <reference types="Cypress" />

describe('Shops', () => {
  beforeEach(() => {
    cy.visit('/')
})
  it('it should be able to see all shops ', () => {
    cy.Shop('mohammed@mailinator.com', 'mb02mn03', 'key', 'Padlock')
  })
})