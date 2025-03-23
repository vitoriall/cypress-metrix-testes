describe('Testando os botões do módulo Obra', () => {
    beforeEach(() => {
        cy.visit('https://metrix.nextek.com.br/obra2/obra.php#home'); // Acessa a página do módulo
    });

    it('Verifica se todos os botões funcionam corretamente', () => {
        // Captura todos os botões e links que devem ser clicáveis
        cy.get('a[href^="#"]').each(($el) => {
            const href = $el.attr('href'); // Obtém o link do botão
            if (href && href !== "#") {
                cy.wrap($el).click(); // Clica no botão
                
                // Aguarda o carregamento da nova seção
                cy.url().should('include', href);
                
                // Retorna para a home para continuar os testes
                cy.visit('https://metrix.nextek.com.br/obra2/obra.php#home');
            }
        });
    });
});
