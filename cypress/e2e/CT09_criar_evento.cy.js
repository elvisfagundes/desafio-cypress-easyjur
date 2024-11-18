import Login from "../pages/login";
import Home from "../pages/home";
import Agenda from "../pages/agenda";

const username = Cypress.env('username')
const password = Cypress.env('password')
describe("Criar evento", () => {
    beforeEach(() => {
        Login.post(username, password);
        Home.validaPaginaHome()
    })

    it('deve criar evento na agenda', () => {
        Agenda.validarExibicaoModulo();
        Agenda.criarEvento()
    })
})