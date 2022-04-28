/// <reference types="cypress" />

describe('Cypress UI Automation Sample', () => {
    it('Google Search', () => {
        // Visit Bukalapak
        cy.visit('https://www.google.com/')

        // Wait Page Load
        cy.wait(2000)
        // Enter "QA Engineer" query & Tap ENTER
        cy.get('input[name="q"]').type('QA Engineer{enter}')
        cy.contains('QA Engineer').should('be.visible')
        // Click on Image TAB
        cy.get('.MUFPAc > :nth-child(2) > a').click()
        // Click MORE Tab
        cy.get('.rIbAWc > .NZmxZe').click()
        // Click MAP
        cy.get('.ErsxPb-AHUcCb > .SiT4cd-ibnC6b-bN97Pc > a').click()
   })
})