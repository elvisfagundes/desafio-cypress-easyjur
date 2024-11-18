import Login from "../pages/login";

describe("Login inválido", () => {
    beforeEach(() => {
        Login.validaPaginaLogin();
    })

    it('deve realizar a tentativa de login com email inválido', () => {
        Login.emailInválido()
    })
})