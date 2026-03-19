describe('Registration Functionality', () => {

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
        cy.get("input[id='customer.username']").type('Akira')
        cy.get("input[id='customer.password']").type('Bidur')
        cy.get("#repeatedPassword").type('Bidur')
        cy.get("input[value='Register']").click()
    })

})