// ============================================================
// TEST SUITE 1: LOGIN FUNCTIONALITY
// describe() groups related tests together under one name
// ============================================================
describe('Login Functionality', () => {

    // it() defines a single test case with a description
    it('Registers user', () => {

        // Opens the ParaBank website in the browser
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        // Finds the username input field (by its 'name' attribute) and types "shova"
        cy.get("input[name='username']").type("shova")

        // Finds the password input field and types the password
        cy.get("input[name='password']").type("Bidur")

        // Finds the Log In button (by its 'value' attribute) and clicks it
        cy.get("input[value='Log In']").click()

        // Clicks the first account number link inside the accounts table
        // This is an nth-child CSS selector navigating through the table structure
        cy.get('#accountTable > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1)').click()

        // Finds the month dropdown (by id) and selects option with value 12 (December)
        // .select() is used specifically for <select> dropdown elements
        cy.get('#month').select(12)

        // Selects "March" from the same dropdown — using the visible text label
        cy.get('#month').select('March')

        // Selects "December" from the dropdown — using the visible text label
        // NOTE: All 3 .select() calls above show 3 different ways to select:
        //   1. By numeric value (12)
        //   2. By visible text ('March')
        //   3. By visible text ('December')
        cy.get('#month').select('December')
    })
})
