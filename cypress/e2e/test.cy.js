describe('First Test', () => {
    it('passes', () => {

        // Visits Instagram — NOTE: cy.visit() needs full URL with https://
        // 'www.instagram.com' without https:// will likely cause an error
        cy.visit('www.instagram.com')  // Should be: cy.visit('https://www.instagram.com')
    })
})