import { elements as el } from "./elements";

export default new class Pessoas {

    validarExibicaoModulo() {
    // redireciona para a página do módulo Pessoas e valida a exibição da página
        cy.visit('/sgr/index.php?pg=pessoas_lista')
        cy.get(el.titlePessoas).should('be.visible')
    }
    // Clica no botão "+ Novo", insere o campo obrigatório de nome e clica no botão "Salvar e sair"
    criarCadastro(name) {
        cy.get(el.newRegisterButton).click()
        cy.get(el.nameLabel).type(name)
        cy.get(el.modalRegister).should('be.visible');
        cy.get(el.buttonSaveNewRegister).click()
    }
    // Realiza a pesquisa do nome criado e valida a exibição do mesmo
    pesquisaNome(name) {
        cy.get(el.searchLabel).type(name)
        cy.get(el.searchButton).click()
        cy.get(el.resultSearch).should('have.text', name)
    }
    // Realiza a ediição do cadastro incluindo o apelido e valida se o apelido foi inserido
    editarCadastro(surname) {
        cy.get(el.editButton).click()
        cy.get(el.modalRegister).should('be.visible');
        cy.get(el.labelSurname).type(surname)
        cy.get(el.buttonSaveNewRegister).click()
        cy.get(el.surnameItem).should('be.visible')
        cy.get(el.surnameItem).contains('Apelido: ' + surname)
    }
    //  Realiza a remoção do cadastro e verifica se o nome foi excluído
    removerCadastro(name) {
        cy.get(el.deleteButton).click()
        cy.get(el.confirmDeleteButtons).should('be.visible')
        cy.get(el.confirmDeleteButton).contains('OK').click()
        cy.get(el.resultSearch).should('not.exist', name)
    }
}