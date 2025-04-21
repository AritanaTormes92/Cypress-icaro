describe('Cadastro e exclusão de usuário no Automation Exercise', () => {
  before(() => {
    cy.visit('https://automationexercise.com')
  })

  it('Fluxo completo de criação e exclusão de conta com sucesso', () => {

    cy.preencherSignup()
    cy.preencherInformacoesConta()
    cy.finalizarCadastro()
    cy.excluirConta()

  })

  after(() => {
    cy.clearCookies()
  })
})
