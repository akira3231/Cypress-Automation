describe('Mouse over', () => {
    it('handles mouse over', () => {

        // Opens the Automation Practice page
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // ---- COMMENTED OUT APPROACH (kept for reference) ----
        // .trigger('mouseover') simulates the actual mouse hovering over the element
        // This fires the real mouseover event like a user would
        // BUT — it can be unreliable if the hidden menu uses CSS :hover to show/hide
        // because Cypress doesn't truly move the mouse cursor
        // cy.get('#mousehover').trigger('mouseover')

        // ---- CURRENT APPROACH ----
        // .invoke('show') is a jQuery method that FORCES the element to become visible
        // It bypasses CSS visibility rules entirely — doesn't matter if it's hidden by hover
        // This is more reliable for menus that only appear on CSS :hover
        cy.get('#mousehover').invoke('show')

        // After making the menu visible, you can now click the hidden links inside it
        // For example, if hovering reveals a "Top" and "Reload" link:
        // cy.contains('Top').click()
        // cy.contains('Reload').click()
    })
})