describe('Radio Button Functionality', () => {
    it('Handles radio buttons', () => {

        // Opens the Automation Practice page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Finds all radio button inputs on the page using the type attribute
        // .check() is used instead of .click() — it is specifically designed for
        // radio buttons and checkboxes, making it more reliable than .click()
        // ["radio1"] is the value attribute of the specific radio button you want to select
        // You can pass multiple values like .check(["radio1", "radio2"]) to check several at once
        cy.get('input[type="radio"]').check(["radio1"])

        // NOTE: .check() vs .click()
        // .click()  → works on anything but doesn't verify it's a checkbox/radio
        // .check()  → built for checkboxes and radio buttons specifically 
        //             also automatically verifies the element is not disabled
    })
})