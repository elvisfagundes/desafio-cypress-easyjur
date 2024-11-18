import { elements as el} from './elements';

export default new class Home {
    validaPaginaHome () {
    // Valida se o login foi realizado confirmando que o usuário está na página home logada
    // os gráficos estão sendo exibidos e cookies fechados
        cy.title().should('eq', 'EasyJur Software Jurídico')
        cy.get(el.dashboarGraph).should(($list) => {
            expect($list).to.have.length(11)
        })
        cy.get(el.acceptedCookies).click()
    }
}