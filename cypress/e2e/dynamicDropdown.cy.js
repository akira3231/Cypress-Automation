describe('Handling dynamic dropdown functionality', () => {
    it('Dynamic Dropdown', () => {

        // Opens the dropdown practice page
        cy.visit('https://vinothqaacademy.com/drop-down/')

        // Types "10" into the Select2 dropdown search input
        // {delay:200} adds a 200ms gap between each keystroke — simulates real user typing
        // This also helps the dropdown have time to load its options
        cy.get("#select2-FromAccount-container").type("10", { delay: 200 })

        // cy.contains() finds an element matching BOTH:
        //   1. The CSS selector: any <li> option inside the results list
        //   2. The text content: anything containing "8400143"
        // Then clicks on it to select that option
        // NOTE: We use .select2-results__option (without --selected or --highlighted)
        //       because those classes are unstable — they change as you hover/select
        cy.contains("#select2-FromAccount-results .select2-results__option", "8400143").click()
    })
})