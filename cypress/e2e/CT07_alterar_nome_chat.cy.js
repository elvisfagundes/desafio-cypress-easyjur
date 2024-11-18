import Login from "../pages/login";
import Home from "../pages/home";
import JurisAI from "../pages/jurisai";

const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = 'Alterar titulo chat'
describe("Alterar titulo do chat", () => {
    beforeEach(() => {
        Login.post(username, password);
        Home.validaPaginaHome()
    })

    it('deve alterar o titulo do titulo do chat', () => {
         JurisAI.validarExibicaoModulo();
         JurisAI.validarExibicaoHistórico();
         JurisAI.alterarTituloChat(titulo);
         JurisAI.excluirChat()
    })
})