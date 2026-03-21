// ============================================================
// TEST SUITE 3: REGISTRATION WITH ERROR VALIDATION
// Same as above but now checks for duplicate username error
// ============================================================
describe('Re-registration Functionality', () => {
    it('Registers user', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('Bidur')
        cy.get("input[id='customer.lastName']").type('Bidur')
        cy.get("input[id='customer.address.street']").type('Bidur')
        cy.get("input[id='customer.address.city']").type('Bidur')
        cy.get("input[id='customer.address.state']").type('Bidur')
        cy.get("input[id='customer.address.zipCode']").type('Bidur')
        cy.get("input[id='customer.phoneNumber']").type('Bidur')
        cy.get("input[id='customer.ssn']").type('Bidur')
        cy.get("input[id='customer.username']").type('Akira')  // 'Akira' already exists
        cy.get("input[id='customer.password']").type('Bidur')
        cy.get("#repeatedPassword").type('Bidur')
        cy.get("input[value='Register']").click()

        // ---- COMMENTED OUT ALTERNATIVE (kept for reference) ----
        // .contains() checks if the element contains that text anywhere inside it
        // cy.get("span[id='customer.username.errors']").contains('The username already exists.')

        // .should('have.text') is STRICTER — checks for an EXACT full text match
        // This verifies the error message shown when trying to register a taken username
        cy.get("span[id='customer.username.errors']").should('have.text', 'This username already exists.')
    })
})