describe('Registration Functionality', () => {
    it('Registers user', () => {

        // Opens the ParaBank homepage
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        // Clicks the "Register" link inside the login panel
        // :nth-child(3) means the 3rd child element inside #loginPanel
        cy.get('#loginPanel > :nth-child(3) > a').click()

        // Fills in the registration form fields one by one
        // Each cy.get() targets the input by its 'id' attribute
        cy.get("input[id='customer.firstName']").type('Akira')
        cy.get("input[id='customer.lastName']").type('Akira')
        cy.get("input[id='customer.address.street']").type('Akira')
        cy.get("input[id='customer.address.city']").type('Akira')
        cy.get("input[id='customer.address.state']").type('Akira')
        cy.get("input[id='customer.address.zipCode']").type('Akira')
        cy.get("input[id='customer.phoneNumber']").type('Akira')
        cy.get("input[id='customer.ssn']").type('Akira')   // SSN = Social Security Number

        // Username and password fields for the new account
        cy.get("input[id='customer.username']").type('Akira')
        cy.get("input[id='customer.password']").type('Akira')

        // Confirm password field — targeted directly by its id
        cy.get("#repeatedPassword").type('Akira')

        // Clicks the Register button to submit the form
        cy.get("input[value='Register']").click()
    })
})