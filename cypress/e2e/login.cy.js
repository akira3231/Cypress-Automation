describe('Login Functionality', () => {

    it('Registers user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type("shova")
        cy.get("input[name='password']").type("Bidur")
        cy.get("input[value='Log In']").click()
        cy.get('#accountTable > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1)').click()
        cy.get('#month').select(12)
        cy.get('#month').select('March')
        cy.get('#month').select('December')
    })
    

})