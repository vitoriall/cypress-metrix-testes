describe('Teste da navegação na página de Obra', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('validateForm is not defined')) {
                return false;
            }
        });

        // Visita a página de login
        cy.visit('https://metrix.nextek.com.br/login/login.php');

        // Faz login
        cy.get('input[name="UserName"]').type('vitoria.albuquerque@nextek.com.br');
        cy.get('input[name="Passe"]').type('Vitoria2215#');
        cy.contains('button', 'Entrar').click();

        // Aguarda a home carregar
        cy.url().should('include', '/menu/menu.php');
    });

    it('Força a aba "Obra" a abrir na mesma aba e aguarda carregamento', () => {
        // Remove o atributo target para garantir que a página abra na mesma aba
        cy.contains('a', 'Obra').invoke('removeAttr', 'target').click();

        // Aguarda a URL da página de obras
        cy.url().should('include', '/obra2/obra.php');

        // Aguarda até que o select de obras esteja no DOM antes de verificar visibilidade
        cy.get('select[name="obraAtiva"]', { timeout: 10000 }).should('exist');

    });
});
