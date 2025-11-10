describe('Login', () => {

  beforeEach(() => {

    //Arrange
    cy.visit(Cypress.env('URL'))


  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    
    //Act
    cy.fixture('credenciais').then(credenciais => {
    cy.get('#username').click().type(credenciais.valida.usuario)
    cy.get('#senha').click().type(credenciais.valida.senha)
    })
    // cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it.only('Login com dados Inválidos deve apresentar mensagem de erro', () => {

    //Act
    cy.fixture('credenciais').then(credenciais => {
    cy.get('#username').click().type(credenciais.invalida.usuario)
    cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    // cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')


  })  


})