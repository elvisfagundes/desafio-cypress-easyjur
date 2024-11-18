import Login from "../pages/login";
import Home from "../pages/home";
import JurisAI from "../pages/jurisai";

const username = Cypress.env('username')
const password = Cypress.env('password')

describe("Chat com prompt JurisAI", () => {
    beforeEach(() => {
        Login.post(username, password);
        Home.validaPaginaHome()
    })

    it('deve iniciar chat utilizando os prompts disponíveis', () => {
         JurisAI.validarExibicaoModulo();
         JurisAI.prompt()
    })
})