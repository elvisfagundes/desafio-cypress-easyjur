import Login from "../pages/login";
import Home from "../pages/home";
import JurisAI from "../pages/jurisai";

const username = Cypress.env('username')
const password = Cypress.env('password')
const mensagem = 'dano moral'
describe("Chat com mensagem digitada JurisAI", () => {
    beforeEach(() => {
        Login.post(username, password);
        Home.validaPaginaHome()
    })

    it('deve iniciar chat utilizando mensagem', () => {
         JurisAI.validarExibicaoModulo();
         JurisAI.preencherBusca(mensagem)
    })
})