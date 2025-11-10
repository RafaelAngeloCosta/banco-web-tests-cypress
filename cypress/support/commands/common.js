Cypress.Commands.add('verificarMensagemNoToast', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
}) 


Cypress.Commands.add('selecionarOpcaoNaCombobox', (labelDoCampo, opcao) => {
    // cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
    cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
    cy.get(`@campo-${labelDoCampo}`).click()
    cy.get(`@campo-${labelDoCampo}`).contains(opcao).click()

})


    // cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
    // cy.get('@campo-conta-origem').click()
    // cy.get('@campo-conta-origem').contains('João da Silva').click()