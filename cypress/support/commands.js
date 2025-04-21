Cypress.Commands.add('preencherSignup', (nome, email) => {
    cy.get('a > img').should('be.visible')
    cy.contains('Signup / Login').click()
    cy.get('input[data-qa="signup-name"]').type('João')
    cy.get('input[data-qa="signup-email"]').type('teste2@teste')
    cy.get('button[data-qa="signup-button"]').click()
  })
  
  Cypress.Commands.add('preencherInformacoesConta', (dados) => {
    cy.get('#id_gender1').check()
    cy.get('#password').type('123')
    cy.get('#days').select('7')
    cy.get('#months').select('March')
    cy.get('#years').select('1992')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
  
    cy.get('#first_name').type('João')
    cy.get('#last_name').type('Teste')
    cy.get('#company').type('Icaro')
    cy.get('#address1').type('Rua 1')
    cy.get('#address2').type('Ap 416')
    cy.get('#country').select('United States')
    cy.get('#state').type('RS')
    cy.get('#city').type('Porto Alegre')
    cy.get('#zipcode').type('1234567')
    cy.get('#mobile_number').type('51999999999')
    cy.get('[data-qa="create-account"]').click()
  })
  
  Cypress.Commands.add('finalizarCadastro', () => {
    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
  
  Cypress.Commands.add('excluirConta', () => {
    cy.contains('Delete Account').click()
    cy.contains('Account Deleted!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
  