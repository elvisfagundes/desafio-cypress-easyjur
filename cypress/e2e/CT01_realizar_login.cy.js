import Login from "../pages/login";
import Home from "../pages/home";

const username = Cypress.env('username')
const password = Cypress.env('password')

describe("Login válido", () => {
    beforeEach(() => {
        Login.validaPaginaLogin();
    })

    it('deve realizar o login com sucesso', () => {
        Login.realizarLogin(username, password);
        Home.validaPaginaHome()
    })

    // it('login alternativo através da requisição POST', () => {
        // Login.post(username, password);
        // Home.validaPaginaHome()
    // })
})