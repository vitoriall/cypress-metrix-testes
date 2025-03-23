describe('Testando o módulo Obra após login completo', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (
        err.message.includes('validateForm is not defined') ||
        err.message.includes("Cannot read properties of null (reading 'querySelector')")
      ) {
        return false;
      }
    });
  
    beforeEach(() => {
      cy.visit('https://metrix.nextek.com.br/login/login.php');
  
      cy.get('input[name="UserName"]').should('be.visible').type('vitoria.albuquerque@nextek.com.br');
      cy.get('input[name="Passe"]').should('be.visible').type('Vitoria2215#');
      cy.get('button#Enviar').click();
  
      cy.contains('Selecione a empresa:').should('be.visible');
      cy.get('select').select('Origo');
      cy.contains('Entrar').click();
  
      cy.visit('https://metrix.nextek.com.br/obra2/obra.php#home');
      cy.wait(2000);
    });
  
    it('Valida dados carregados da obra padrão "FRRP"', () => {
      cy.contains('Local: Ribas do Rio Pardo - MS', { timeout: 10000 }).should('exist');
    });
  
    it('Verifica se todos os botões do menu lateral funcionam corretamente', () => {
      const abas = [
        '#ace_buscar',
        '#ace_gerenciar',
        '#ace_relat',
        '#ati_acompanhar',
        '#ati_gerenciar',
        '#ati_import',
        '#ati_export',
        '#rdo_buscar',
        '#rdo_gerenciar',
        '#inspecoes_dash',
        '#inspecoes_gerenciar',
        '#cl_modelos',
        '#inspecoes_relatorios',
        '#nc_alerta',
        '#nc_dashboard',
        '#nc_gerenciar',
        '#rh_dashboard',
        '#grhc_empresa',
        '#grhc_gerenciar',
        '#grhc_relatorios',
        '#ambiental_gerenciar',
        '#ambiental_fornecedor',
        '#ambiental_relatorios',
        '#adm_cltipo',
        '#adm_contrato',
        '#adm_histograma',
        '#adm_rdolistaemail',
        '#adm_local',
        '#adm_usuario'
      ];
  
      abas.forEach((aba) => {
        cy.visit('https://metrix.nextek.com.br/obra2/obra.php#home');
        cy.get(`a[href="${aba}"]`, { timeout: 10000 }).click({ force: true });
        cy.url().should('include', aba);
      });
    });
  
  });
  