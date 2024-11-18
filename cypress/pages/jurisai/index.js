import { elements as el } from "./elements";

export default new class JurisAI {
    validarExibicaoModulo() {
        // redireciona para a página do módulo JurisAI e valida a exibição da página
        cy.visit('/sgr/index.php?pg=chat_juris')
        cy.get(el.titleJuris).should('have.text', 'JurisAI')
    }

    prompt() {
        // Verifica se os cards de prompts são exibidos
        cy.get(el.promptList).should(($list) => {
            expect($list).to.have.length(5)
            expect($list.eq(0)).to.contain('dano moral')
            expect($list.eq(1)).to.contain('ICMS')
            expect($list.eq(2)).to.contain('embargo')
            expect($list.eq(3)).to.contain('processo civil')
            expect($list.eq(4)).to.contain('nulidade')
        })

        // Clica sobre um prompt e clica sobre o botão de enviar
        cy.get(el.promptChoose).click()
        cy.get(el.searchButton).click()

        // Verifica se a resposta do prompt é retornada
        cy.intercept('POST', '/sgr/advogados/scripts/jurisai/threads/ajax_get_last_thread_message.php', {
            statusCode: 200
        }).as('chatbotMessage')

        cy.wait('@chatbotMessage')
    }

    preencherBusca(message) {
        // Preenche o campo de busca com um texto qualquer
        cy.get(el.searchInput).type(message)
        cy.get(el.searchButton).click()

        // Verifica se a resposta do prompt é retornada
        cy.intercept('POST', '/sgr/advogados/scripts/jurisai/threads/ajax_get_last_thread_message.php', {
            statusCode: 200
        }).as('chatbotMessage')
        
        cy.wait('@chatbotMessage')
    }

    validarExibicaoHistórico(){
    // Percorre as divs do histórico e verifica se o tamanho da lista é maior que 0
        cy.get(el.historyList)
        .each(($lis) => {
            return $lis
        }).then(($lis) => {
            if ($lis.length > 0) {
                cy.log(`o histórico de chats possui ${$lis.length} seções relacionadas ao tempo visíveis`)
            } else {
                cy.log('Não existe histórico de chat')
            }    
        })
    }

    alterarTituloChat(title){
    // Percorre a lista do histórico do chat e utiliza a primeira posição e realiza o click
        cy.get(el.editChatName)
        .each(($lis) => {
            return $lis
        }).then(($lis) => {
            $lis[0].click()
        })

    // Percorre a lista de imput do chat e utiliza a primeira posição, limpa o campo e salva o titulo
        cy.get(el.labelChatNameInput)
        .each(($li) => {
            return $li[0]
        }).then(($li) => {
            cy.get($li).clear()
            cy.get($li).type(title)
            cy.get($li).type('{enter}')
        })

    // Percorre a lista do histórico do chat e verifica se o titulo foi alterado
        cy.get(el.labelChatName).should(($list) => {
            expect($list.eq(0)).to.contain(title)
        })
    }

    excluirChat() {
    // Percorre a lista do chat buscando o icone de lixeira e clica sobre o ícone
        cy.wait(2000)
        cy.get(el.deleteChat)
        .each(($li) => {
            return $li
        }).then(($li) => {
            cy.get($li[0]).click()
        })

    // Valida exibição do modal e clica para confirmar a exclusão
        cy.get(el.modalDeleteChat).should('be.visible', 'Deseja realmente excluir a conversa')
        cy.get(el.modalConfirmDelete).contains('OK').click()

    // Valida que a exclusão foi realizada
        cy.intercept('DELETE', '/sgr/advogados/scripts/chat/chats/ajax_apaga_chat.php', {
            statusCode: 200
        }).as('deleteChat')
    }
}