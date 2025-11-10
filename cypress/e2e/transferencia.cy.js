describe('Transferencias', () => {

  beforeEach(() => {
    //Arrange
    cy.visit('/')
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.valida.usuario)
        cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
  })

  it('Deve transferir quando informo dados validados.', () => {
    cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
    cy.get('@campo-conta-origem').click()
    cy.get('@campo-conta-origem').contains('João da Silva').click()

    cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
    cy.get('@campo-conta-destino').click()
    cy.get('@campo-conta-destino').contains('Maria Oliveira').click()
    cy.get('#valor').click().type('11')

    cy.contains('button', 'Transferir').click()
 
    // cy.get('.toast').should('have.text', 'Transferência realizada!')  

    //Assert
    // cy.contains('h4','Realizar Transferência').should('be.visible')
  })

//   it.only('Login com dados Inválidos deve apresentar mensagem de erro', () => {

//     //Act
//     cy.fixture('credenciais').then(credenciais => {
//     cy.get('#username').click().type(credenciais.invalida.usuario)
//     cy.get('#senha').click().type(credenciais.invalida.senha)
//     })
//     // cy.get('#login-section > .btn').click()
//     cy.contains('button', 'Entrar').click()

//     //Assert
//     cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')


//   })  


})