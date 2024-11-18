import Login from "../pages/login";
import Home from "../pages/home";
import Agenda from "../pages/agenda";

const username = Cypress.env('username')
const password = Cypress.env('password')
const dia = '16'
describe("Alterar evento", () => {
    beforeEach(() => {
        Login.post(username, password);
        Home.validaPaginaHome()
    })

    it('deve alterar evento na agenda', () => {
        Agenda.validarExibicaoModulo();
        Agenda.alterarEvento(dia)
    })
})