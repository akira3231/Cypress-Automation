# 🌲 Cypress Automation — Beginner Practice Project

> A beginner-friendly collection of **End-to-End (E2E) test automation** scripts built with **Cypress** and **JavaScript**.  
> This project is for learning and practicing core Cypress concepts using real, publicly available demo websites.  
> Perfect for anyone starting out in QA automation or looking to get hands-on with Cypress. 🚀

---

## 🧰 Tech Stack

| Tool | Purpose |
|---|---|
| [Cypress](https://www.cypress.io/) | E2E Testing Framework |
| JavaScript | Test scripting language |
| Node.js | Runtime environment |
| VS Code | Recommended code editor |

---

## 📁 Folder Structure

```
Cypress-Automation/
│
├── cypress/
│   ├── e2e/                            # All test files live here
│   │   ├── test.cy.js                  # Basic sanity/visit test
│   │   ├── login.cy.js                 # Login with credentials
│   │   ├── registration.cy.js          # New user registration form
│   │   ├── re-registration.cy.js       # Duplicate username error validation
│   │   ├── dynamicDropdown.cy.js       # Search-based dynamic dropdown
│   │   ├── radioButtons.cy.js          # Radio button selection
│   │   ├── checkboxes.cy.js            # Checkbox check & uncheck
│   │   ├── clearText.cy.js             # Typing and clearing input fields
│   │   ├── scroll.cy.js                # Page and element scrolling
│   │   ├── upload.cy.js                # File upload
│   │   ├── slider.cy.js                # Range slider interaction
│   │   └── mouseOver.cy.js             # Mouse hover interactions
│   │
│   ├── fixtures/                       # Static test data files (JSON, PDFs etc.)
│   └── support/                        # Global config and custom commands
│       ├── commands.js                 # Add reusable custom commands here
│       └── e2e.js                      # Runs automatically before every test file
│
├── node_modules/                       # Installed packages (do not edit)
├── cypress.config.js                   # Main Cypress configuration file
├── jsconfig.json                       # VS Code autocomplete/intellisense config
├── package.json                        # Project metadata and dependencies
└── package-lock.json                   # Locked dependency versions
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/akira3231/Cypress-Automation.git
cd Cypress-Automation
```

### 2. Install dependencies
```bash
npm install
```

### 3. Open Cypress (interactive GUI mode)
```bash
npx cypress open
```

### 4. Run all tests (headless terminal mode)
```bash
npx cypress run
```

---

## 🧪 Test Suites Overview

| File | What it Tests | Practice Site |
|---|---|---|
| `login.cy.js` | Login form, account navigation, dropdown selection | ParaBank |
| `registration.cy.js` | Full registration form submission | ParaBank |
| `re-registration.cy.js` | Duplicate username error message validation | ParaBank |
| `dynamicDropdown.cy.js` | Type-to-search dropdown, selecting filtered result | VinothQA Academy |
| `radioButtons.cy.js` | Selecting a radio button by value using `.check()` | Rahul Shetty Academy |
| `checkboxes.cy.js` | Checking and unchecking checkboxes by value | Rahul Shetty Academy |
| `clearText.cy.js` | Typing into inputs and clearing the text | ParaBank |
| `scroll.cy.js` | Scrolling page to positions, coordinates, and elements | Rahul Shetty Academy |
| `upload.cy.js` | Selecting and uploading a local file | Practice Automation |
| `slider.cy.js` | Setting range slider value using `.invoke()` | Practice Automation |
| `mouseOver.cy.js` | Revealing hover menus using `.invoke('show')` | Rahul Shetty Academy |

---

## 🏗️ Test Structure

Every test file in this project follows the same structure:

```js
// describe() — groups related tests under one name
describe('Feature Name', () => {

    // it() — defines one individual test case
    it('does something specific', () => {

        // Step 1: Visit the page
        cy.visit('https://example.com')

        // Step 2: Interact with elements
        cy.get('#input').type('hello')

        // Step 3: Assert the expected result
        cy.get('#message').should('have.text', 'hello')

    })
})
```

---

## ⚡ Quick Command Reference

### 🔍 Finding Elements
```js
cy.get('#myId')                          // By ID
cy.get('.myClass')                       // By class
cy.get("input[name='username']")         // By attribute
cy.get("input[type='radio']")            // By input type
cy.contains('.list-item', 'some text')   // By selector + visible text
```

### 🖱️ Actions
```js
.type('hello')                           // Type into an input
.type('hello', { delay: 200 })           // Type slowly (simulates real user)
.click()                                 // Click an element
.clear()                                 // Clear all text from an input
.clear().type('new text')                // Clear then type (safest approach)
.select('March')                         // Select <select> dropdown by visible text
.select(12)                              // Select <select> dropdown by value
.check(['option1'])                      // Check checkbox or radio by value
.uncheck(['option1'])                    // Uncheck a checkbox by value
.selectFile('path/to/file.pdf')          // Upload a file
.scrollIntoView()                        // Scroll until element is visible
.invoke('val', 1500).trigger('change')   // Set slider value
.invoke('show')                          // Force a hidden element to be visible
```

### 📜 Scrolling
```js
cy.scrollTo('bottom')                    // Scroll page to the bottom
cy.scrollTo('top')                       // Scroll page back to the top
cy.scrollTo(0, 2000)                     // Scroll to exact pixel coordinates
cy.scrollTo('bottom', { duration: 2000}) // Scroll slowly over 2 seconds
cy.get('#element').scrollIntoView()      // Scroll to a specific element
cy.get('#element').scrollIntoView({ offset: { top: -100, left: 0 }}) // With offset
```

### ✅ Assertions
```js
.should('be.checked')                    // Checkbox/radio IS checked
.should('not.be.checked')               // Checkbox/radio is NOT checked
.should('have.text', 'exact text')       // Element has exact text (strict)
.contains('some text')                   // Element contains text (loose)
.should('be.visible')                    // Element is visible on screen
.should('exist')                         // Element exists in the DOM
.should('not.exist')                     // Element does not exist
```


## 💡 Key Concepts

### `.check()` vs `.click()` for radio buttons & checkboxes
```js
.click()              // ❌ works but not purpose-built for checkboxes
.check(['value'])     // ✅ built specifically for checkboxes and radio buttons
.uncheck(['value'])   // ✅ built specifically for unchecking checkboxes
```

### `.contains()` for dynamic dropdowns
```js
// ❌ Unreliable — these classes change as you hover/select
cy.get('.select2-results__option--selected')
cy.get('.select2-results__option--highlighted')

// ✅ Reliable — matches by visible text, stable regardless of class changes
cy.contains('.select2-results__option', '8400143').click()
```

### `.should('have.text')` vs `.contains()`
```js
.contains('some text')               // passes if text appears ANYWHERE inside element
.should('have.text', 'exact text')   // must match the FULL exact text — stricter
```

### Hover menus — `.invoke('show')` vs `.trigger('mouseover')`
```js
.trigger('mouseover')   // ❌ unreliable — CSS :hover may not activate
.invoke('show')         // ✅ forces the element visible, bypasses CSS rules
```



---

## 📌 Practice Sites Used

| Site | URL | Topics Covered |
|---|---|---|
| ParaBank | https://parabank.parasoft.com/parabank/index.htm | Login, Registration, Dropdowns |
| VinothQA Academy | https://vinothqaacademy.com/drop-down/ | Dynamic Dropdowns |
| Rahul Shetty Academy | https://rahulshettyacademy.com/AutomationPractice/ | Radio Buttons, Checkboxes, Scroll, Hover |
| Practice Automation | https://practice-automation.com/file-upload/ | File Upload |
| Practice Automation | https://practice-automation.com/slider/ | Range Slider |

---

## 📝 Important Notes

- All tests in this project are **E2E (End-to-End) tests** — they run in a real browser simulating a real user
- `jsconfig.json` only affects **VS Code autocomplete** — it has zero effect on how tests run
- `cypress.config.js` is what **actually controls** how Cypress runs your tests
- Always use `https://` in `cy.visit()` — bare URLs like `www.example.com` will fail
- CSS selectors are **case sensitive** — `'Radio1'` and `'radio1'` are treated as different values
- Always close `describe()` and `it()` blocks with `})` not just `}` or `)`
- For file uploads, store test files inside `cypress/fixtures/` so they work on any machine:
```js

// ✅ Works everywhere — file travels with the project
cy.get('#file-upload').selectFile('cypress/fixtures/myfile.pdf')
```

---

## 🔰 This Project Is For

- Beginners learning Cypress for the first time
- QA engineers practicing test automation basics
- Anyone who wants hands-on examples of common UI interactions automated with Cypress
