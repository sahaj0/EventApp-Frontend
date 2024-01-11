describe("Login Test",()=>{

    it("Should Login and Redirected to Note Component !!",()=>{

        // This line will provide the access to the application
        cy.visit(Cypress.env('appURL'))

        // This line will check whether user is redirected to the login page or not
        cy.url().then(url =>{
            cy.url().should('contain','login')
        })

        // This line will select the username input field and write the username
        cy.get('[data-cy=login-username-input]').type(Cypress.env('username'))

        // This line will select the password input field and write the password
        cy.get('[data-cy=login-password-input]').type(Cypress.env('password'))

        // This line will atumate the process of clicking the login button
        cy.get('[data-cy=login-button]').click({multiple:true})

        cy.url().then(url =>{
            cy.url().should('contain','note')
        })
    })
})