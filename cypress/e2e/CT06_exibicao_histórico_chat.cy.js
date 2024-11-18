import Login from "../pages/login";
import Home from "../pages/home";
import JurisAI from "../pages/jurisai";

const username = Cypress.env('username')
const password = Cypress.env('password')
describe("Exibição do histórico", () => {
    beforeEach(() => {
        Login.post(username, password);
        Home.validaPaginaHome()
    })

    it('deve validar a exibição do histórico do chat', () => {
         JurisAI.validarExibicaoModulo();
         JurisAI.validarExibicaoHistórico();
    })
})