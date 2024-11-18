import Login from "../pages/login";

const username = Cypress.env('username')

describe("Login inválido", () => {
    beforeEach(() => {
        Login.validaPaginaLogin()
    })

    it('deve realizar a tentativa de login com email inválido', () => {
        Login.senhaInválida(username)
    })
})