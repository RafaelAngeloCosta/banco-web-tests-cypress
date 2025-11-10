describe('Transferencias', () => {

  beforeEach(() => {
    //Arrange
    cy.visit('/')
    cy.fazerLoginComCredenciaisValidas()
  })

  it('Deve transferir quando informo dados validados.', () => {

    cy.selecionarOpcaoNaCombobox('conta-origem', 'João da Silva')
    cy.selecionarOpcaoNaCombobox('conta-destino', 'Maria Oliveira')
    cy.get('#valor').click().type('11')
    cy.contains('button', 'Transferir').click()

    cy.verificarMensagemNoToast('Transferência realizada!')
 
  })

  it('Deve transferir erro quando tentar transferir mais que 5 mil sem token.', () => {

    cy.selecionarOpcaoNaCombobox('conta-origem', 'João da Silva')
    cy.selecionarOpcaoNaCombobox('conta-destino', 'Maria Oliveira')
    cy.get('#valor').click().type('5000.01')
    cy.contains('button', 'Transferir').click()

    cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
 

  })

})