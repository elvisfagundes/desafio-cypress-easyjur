import { elements as el } from "./elements";

export default new class Agenda {
    // redireciona para a página do módulo JurisAI e valida a exibição da página
    validarExibicaoModulo() {
        cy.visit('/sgr/index.php?pg=agenda_calendar')
        cy.get(el.titleAgenda).should('be.visible')
    }
    // Cria o evento a partir do botão "+ Novo" e verifica a response da API para confirmar a criação
    criarEvento() {
        cy.get(el.buttonNewEvent).should('be.visible').click();
        cy.get(el.modalEvent).should('be.visible');
        cy.get(el.buttonSaveNewEvent).click()
        cy.intercept('POST', '/sgr/advogados/scripts/agenda/ajax_verifica_hora_inicio.php', {
            statusCode: 200,
        }).as('eventCreated')
    }
    // Altera o evento a partir do dia desejado e confirma a alteração no response após salvar alterações
    alterarEvento(dia) {
        cy.get(`#days${dia}`).should('be.visible')
        cy.get(el.event).click()
        cy.get(el.selectEmailCheckbox).click()
        cy.get(el.buttonSaveNewEvent).click()
        cy.intercept('POST', '/sgr/advogados/scripts/agenda/ajax_msg_agenda.php', {
            statusCode: 200,
        }).as('eventModified')
        cy.wait('@eventModified')
    }

    removerEvento () {
    // Percorre os dias que possuem eventos, escolhe o primeiro dia e clica no botão para expandir
    cy.get(el.expandButton)
    .each(($li) => {
        return $li
    }).then(($li) => {
        cy.get($li[0]).click()
    })
    
    // Percorre todos os botões de lixeira, escolhe o primeiro e clica sobre
    cy.get(el.trashButton)
    .each(($li) => {
        return $li
    }).then(($li) => {
        cy.get($li[0]).click({ force: true })
    })
    
    // Confirma a exibição do modal e clica no botão de confirmar exclusão
    cy.get(el.modalDelete).should('be.visible')
    cy.get(el.modalConfirmDelete).contains('OK').click()
    
    // Valida o retorno da api para confirmar exclusão
    cy.intercept('POST', '/sgr/advogados/scripts/agenda/ajax_agenda_grid.php?*').as('confirmDelete')
    cy.wait('@confirmDelete').then((interception) => {
        assert.isNotNull(interception.response.body, 'Deletado com Sucesso!')
        })        
    }
}