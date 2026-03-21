describe('Upload functionality', () => {
    it('Handles uploading files', () => {

        // Opens the file upload practice page
        cy.visit('https://practice-automation.com/file-upload/')

        // Finds the file input element by its ID and selects a file from your computer
        // selectFile() is Cypress's built-in command specifically for file uploads
        // You must provide the ABSOLUTE path — the full location of the file on your machine
        // /home/jojo/Downloads/ is your Linux Downloads folder path
        cy.get('#file-upload').selectFile('/home/jojo/Downloads/BidurNeupaneCV-1.pdf')

        // Clicks the upload button to submit the selected file
        cy.get('#upload-btn').click()

        // can also drag and drop a file instead of using the input:
        // cy.get('#file-upload').selectFile('/home/jojo/Downloads/BidurNeupaneCV-1.pdf', { action: 'drag-drop' })

        // Add an assertion to verify upload was successful:
        // cy.get('.success-message').should('be.visible')
        // cy.get('.success-message').should('contain', 'BidurNeupaneCV-1.pdf')
    })
})