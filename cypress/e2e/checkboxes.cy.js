describe('Check box functionality', () => {
    it('Handles checkboxes', () => {

        // Opens the Automation Practice page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Finds ALL checkbox inputs on the page using the type attribute
        // .check(["option3", "option1"]) checks ONLY the boxes whose value matches
        // the values inside the array — order doesn't matter
        // NOTE: the trailing comma after "option1", is fine — JavaScript ignores it
        cy.get('input[type="checkbox"]').check(["option3", "option1"])

        // ---- ASSERTIONS (verifying the checkboxes are actually checked) ----

        // Targets option1 checkbox specifically by its value and confirms it is checked
        // .should('be.checked') will FAIL the test if the box is NOT checked
        cy.get('input[value="option1"]').should('be.checked')

        // Same check for option3
        cy.get('input[value="option3"]').should('be.checked')

        // ---- UNCHECKING ----

        // Finds all checkboxes again and unchecks option3 and option1
        // .uncheck() is the exact opposite of .check()
        // Works ONLY on checkboxes — radio buttons cannot be unchecked this way
        cy.get('input[type="checkbox"]').uncheck(["option3", "option1"])

        // 💡 TIP: You could add these assertions after unchecking to complete the test
        // cy.get('input[value="option1"]').should('not.be.checked')
        // cy.get('input[value="option3"]').should('not.be.checked')
    })
})