import Login from "../pages/login";
import Home from "../pages/home";
import Pessoas from "../pages/pessoas";

const username = Cypress.env('username')
const password = Cypress.env('password')
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const nome = `Joao${id}`
const apelido = `Junior${id}`

describe("Alterar cadastro de Pessoas", () => {
    beforeEach(() => {
        Login.post(username, password);
        Home.validaPaginaHome()
    })

    it('deve criar e alterar o cadastro de pessoas', () => {
        Pessoas.validarExibicaoModulo();
        Pessoas.criarCadastro(nome);
        Pessoas.pesquisaNome(nome);
        Pessoas.editarCadastro(apelido);
    })
})