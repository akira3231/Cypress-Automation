describe('Handling dynamic dropdown functionality', () => {

    it('Dynamic Dropdown', () => {
        cy.visit('https://vinothqaacademy.com/drop-down/')
        cy.get("#select2-FromAccount-container").type("10", {delay:200})
        cy.contains("#select2-FromAccount-results .select2-results__option", "8400143").click()

    })

})

