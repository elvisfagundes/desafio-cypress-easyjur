import Login from "../pages/login";
import Home from "../pages/home";
import JurisAI from "../pages/jurisai";

const username = Cypress.env('username')
const password = Cypress.env('password')
describe("Remoção do chat", () => {
    beforeEach(() => {
        Login.post(username, password);
        Home.validaPaginaHome()
    })

    it('deve remover o chat do histórico', () => {
         JurisAI.validarExibicaoModulo();
         JurisAI.validarExibicaoHistórico();
         JurisAI.excluirChat();
    })
})