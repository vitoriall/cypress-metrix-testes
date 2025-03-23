describe('Teste de Geração de Relatório - Gerenciar Obra', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('validateForm is not defined')) {
          return false; // Ignora o erro da função ausente
        }
      });
  
      // Visita a página de login e faz login antes de acessar o relatório
      cy.visit('https://metrix.nextek.com.br/login/login.php');
  
      cy.get('input[name="UserName"]').type('seu_usuario');
      cy.get('input[name="Passe"]').type('sua_senha');
      cy.get('button#Enviar').click();
  
      // Aguarda o redirecionamento para a página principal após login
      cy.url().should('include', '/dashboard'); // Ajuste conforme necessário
    });
  
    it('Deve acessar a página Gerenciar Obra e gerar um relatório', () => {
      // Acessa a página do relatório
      cy.visit('https://metrix.nextek.com.br/obra2/obra.php#rdo_gerenciar');
  
      // Verifica se a URL está correta
      cy.url().should('include', '/obra2/obra.php#rdo_gerenciar');
  
      // Aguarda e clica no botão de gerar relatório (ajuste o seletor correto)
      cy.get('button#botaoRelatorio', { timeout: 10000 }).should('be.visible').click();
  
      // Aguarda a geração do relatório verificando um indicador (ajuste conforme necessário)
      cy.get('.classe-do-relatorio', { timeout: 15000 }).should('be.visible');
  
      // Verifica se o relatório contém dados
      cy.contains('Relatório Gerado').should('be.visible'); // Ajuste conforme o texto real da página
    });
  });
  