describe('Scroll functionality', () => {
    it('Handles Scroll', () => {

        // Opens the Automation Practice page — #top anchors the page at the very top
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')

        // ============================================================
        // BASIC SCROLLING — cy.scrollTo()
        // Scrolls the entire PAGE (not a specific element)
        // ============================================================

        // Scrolls all the way to the bottom of the page
        cy.scrollTo('bottom')

        // Scrolls to exact pixel coordinates — X: 0 (no horizontal), Y: 2000px down
        cy.scrollTo(0, 2000)

        // Other position keywords you can use with cy.scrollTo():
        // cy.scrollTo('top')          // back to very top
        // cy.scrollTo('left')         // far left
        // cy.scrollTo('right')        // far right
        // cy.scrollTo('topLeft')      // top left corner
        // cy.scrollTo('topRight')     // top right corner
        // cy.scrollTo('bottomLeft')   // bottom left corner
        // cy.scrollTo('bottomRight')  // bottom right corner


        // ============================================================
        // cy.scrollTo() ARGUMENTS from the docs (Image 2)
        // ============================================================

        // duration — scrolls slowly over 2000ms (2 seconds) instead of instantly
        cy.scrollTo('bottom', { duration: 2000 })

        // easing — 'linear' scrolls at a constant speed (default is 'swing' which eases in/out)
        cy.scrollTo('bottom', { easing: 'linear' })

        // duration + easing combined — slow smooth linear scroll
        cy.scrollTo('top', { duration: 1500, easing: 'linear' })

        // ensureScrollable: false — won't throw an error if the page/element can't scroll
        // useful when you're not 100% sure if the element is scrollable
        cy.scrollTo('bottom', { ensureScrollable: false })

        // log: false — hides this scroll command from the Cypress command log panel
        // useful to reduce noise in logs for repeated scroll actions
        cy.scrollTo('bottom', { log: false })

        // timeout — waits up to 5000ms for the scroll to complete before failing
        cy.scrollTo('bottom', { timeout: 5000 })

        // All options combined example:
        cy.scrollTo('bottom', {
            duration: 2000,         // takes 2 seconds to scroll
            easing: 'linear',       // constant speed, no swing effect
            ensureScrollable: false,// won't error if not scrollable
            log: true,              // shows in command log (default)
            timeout: 5000           // waits up to 5 seconds
        })


        // ============================================================
        // .scrollIntoView() ARGUMENTS from the docs (Image 1)
        // Scrolls a SPECIFIC ELEMENT into the visible viewport
        // Used on cy.get() — not on the whole page like cy.scrollTo()
        // ============================================================

        // Basic scrollIntoView — scrolls until the element is visible
        cy.get('#gf-BIG').scrollIntoView()

        // duration — scrolls to the element slowly over 1500ms
        cy.get('#gf-BIG').scrollIntoView({ duration: 1500 })

        // easing — 'linear' for constant speed scroll to element
        cy.get('#gf-BIG').scrollIntoView({ easing: 'linear' })

        // offset — scrolls PAST the element by extra pixels
        // useful when a sticky header covers the element after scrolling
        // top: -100 means stop 100px ABOVE the element
        cy.get('#gf-BIG').scrollIntoView({ offset: { top: -100, left: 0 } })

        // log: false — hides from command log
        cy.get('#gf-BIG').scrollIntoView({ log: false })

        // timeout — waits up to 6000ms before failing
        cy.get('#gf-BIG').scrollIntoView({ timeout: 6000 })

        // All options combined:
        cy.get('#gf-BIG').scrollIntoView({
            duration: 2000,             // slow scroll
            easing: 'linear',           // constant speed
            log: true,                  // show in command log
            offset: { top: -50, left: 0 }, // stop 50px above element
            timeout: 5000               // wait up to 5 seconds
        })
    })
})