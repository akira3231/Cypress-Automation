describe('Clear text demo', () => {
    it('Clears text', () => {

        // Opens the ParaBank homepage
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        // Finds the username input field and types 'Akira' into it
        cy.get("input[name='username']").type('Akira')

        // Clears all the text inside the username input field
        // .clear() is the correct Cypress way to empty an input field
        // It is equivalent to selecting all text and pressing Delete/Backspace
        cy.get("input[name='username']").clear()

        // You can chain .type() and .clear() on the same line
        // instead of calling cy.get() twice on the same element:
        // cy.get("input[name='username']").type('Akira').clear()

        // You can also clear BEFORE typing to make sure
        // the field is empty before you start — useful if a field
        // has a pre-filled default value:
        // cy.get("input[name='username']").clear().type('Akira')
    })
})