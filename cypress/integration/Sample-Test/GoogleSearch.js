/// <reference types="cypress" />

describe('Cypress UI Automation Sample', () => {
    it('Google Search', () => {
        // Visit Bukalapak
        cy.visit('https://www.google.com/')

        // Wait Page Load
        cy.wait(3000)

        cy.get('input[name="q"]').type('QA Engineer{enter}');
        cy.contains('QA Engineer').should('be.visible')
   })
})