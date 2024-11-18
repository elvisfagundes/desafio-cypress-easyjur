import { elements as el } from "./elements";


export default new class Login {
    validaPaginaLogin() {
    // Abre o site da EasyJur e verifica o carregamento da página através do titulo
        cy.visit('/');
        cy.title().should('eq', 'EasyJur')
    }

    // Realiza a requisição post para realizar o login e acessar a página principal logada
    post(username, password) {
        cy.request({
            method: 'POST',
            url: '/acesso/api/login.php', 
            form: true, 
            body: {
              email: username, 
              password: password,
            },
        })
        cy.visit('/')
    }

    realizarLogin(user, password) {
    // Realiza o login válido e verifica o modal de login com sucesso
        cy.get(el.emailLabel).type(user);
        cy.get(el.passwordLabel).type(password, { log: false });
        cy.get(el.buttonLogin).click();
        cy.get(el.sucessMessageModal).should('have.text', 'Estamos realizando o login. Por favor, aguarde um momento.')
    }

    emailInválido() {
    // Realiza a tentiva de login inválido e a exibição do modal com a mensagem de erro
        cy.get(el.emailLabel).type('!');
        cy.get(el.buttonLogin).click();
        cy.get(el.errorMessageModal).should('have.text', 'Endereço de e-mail inválido.');
    }

    senhaInválida(email) {
    // Realiza a tentiva de login inválido e a exibição do modal com a mensagem de erro
        cy.get(el.emailLabel).type(email);
        cy.get(el.passwordLabel).type('aaa')
        cy.get(el.buttonLogin).click();
        cy.get(el.errorMessageModal).should('have.text', 'Senha incorreta. Por favor, tente novamente.');
    }
}
