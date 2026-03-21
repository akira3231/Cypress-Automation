describe('Re-registration Functionality', () => {
    it('Registers user', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('Akira')
        cy.get("input[id='customer.lastName']").type('Akira')
        cy.get("input[id='customer.address.street']").type('Akira')
        cy.get("input[id='customer.address.city']").type('Akira')
        cy.get("input[id='customer.address.state']").type('Akira')
        cy.get("input[id='customer.address.zipCode']").type('Akira')
        cy.get("input[id='customer.phoneNumber']").type('Akira')
        cy.get("input[id='customer.ssn']").type('Akira')
        cy.get("input[id='customer.username']").type('Akira')  // 'Akira' already exists
        cy.get("input[id='customer.password']").type('Akira')
        cy.get("#repeatedPassword").type('Akira')
        cy.get("input[value='Register']").click()

        // ---- COMMENTED OUT ALTERNATIVE (kept for reference) ----
        // .contains() checks if the element contains that text anywhere inside it
        // cy.get("span[id='customer.username.errors']").contains('The username already exists.')

        // .should('have.text') is STRICTER — checks for an EXACT full text match
        // This verifies the error message shown when trying to register a taken username
        cy.get("span[id='customer.username.errors']").should('have.text', 'This username already exists.')
    })
})