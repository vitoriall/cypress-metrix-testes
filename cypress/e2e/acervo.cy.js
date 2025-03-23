/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Inclusão de foto no Acervo - Obra CEOA (Nextek)', () => {
  beforeEach(() => {
    // Ignora o erro de validateForm indefinido
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('validateForm is not defined')) {
        return false;
      }
    });

    // Login no sistema
    cy.visit('https://metrix.nextek.com.br/login/login.php');
    cy.get('input[name="UserName"]').should('be.visible').type('vitoria.albuquerque@nextek.com.br');
    cy.get('input[name="Passe"]').should('be.visible').type('Vitoria2215#');
    cy.get('button#Enviar').click();

    // Seleciona empresa Nextek
    cy.contains('Selecione a empresa:').should('be.visible');
    cy.get('select').select('Nextek');
    cy.contains('Entrar').click();

    // Acessa diretamente o Acervo > Gerenciar da obra CEOA
    cy.visit('https://metrix.nextek.com.br/obra2/obra.php#ace_gerenciar');
    cy.wait(2000);
  });

  it('Deve incluir uma foto com sucesso', () => {
    // Clica no botão Incluir (+)
    cy.get('.glyphicon.glyphicon-plus').first().click();

    // Preenche a data com o dia atual
    const hoje = new Date().toISOString().split('T')[0];
    cy.get('input[name="dataFoto"]').type(hoje, { force: true });

    // Seleciona o local (clicando no nome visível)
    cy.get('#localNome').click({ force: true });
    cy.contains('8441 - GERAL').click({ force: true });
    cy.contains('23900 - Cronograma_Solar_Horizonte_Verde.').click({ force: true });

    // Clica no botão OK para confirmar o local
    cy.get('button.btn.btn-default').contains('OK').click({ force: true });

    // Aguarda o modal fechar
    cy.get('#modalLocais', { timeout: 10000 }).should('not.be.visible');

    // Faz upload da imagem
    cy.get('input[type="file"]').attachFile('cypress-logo.png');

    // Escreve a descrição
    cy.get('textarea[name="description[]"]').type('Teste Automatizado Cypress', { force: true });

    // Clica em Carregar Fotos
    cy.get('#clickAddFoto').click();
  });
});
