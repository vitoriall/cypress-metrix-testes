# ✅ Testes Automatizados com Cypress - Metrix

Este repositório contém testes end-to-end realizados com Cypress para o sistema **Metrix**, focando no fluxo de acesso ao módulo **Obra**.

---

## 🧪 O que está sendo testado?

- Acesso ao sistema com login completo
- Seleção da empresa "Origo"
- Acesso ao módulo **Obra**
- Validação do carregamento de dados da obra padrão "FRRP - Fotovoltaica Ribas do Rio Pardo"
- Navegação entre os botões do menu lateral
- Verificação de URLs após cada clique
- Prints automáticos em caso de falhas (gerados pelo próprio Cypress)

---

## 📁 Estrutura do projeto

```bash
cypress/
├── e2e/
│   └── obra.cy.js           # Testes do módulo Obra
├── screenshots/             # Prints automáticos de falhas
├── support/
│   └── e2e.js
├── fixtures/                # (se necessário para dados mockados)
├── cypress.config.js
├── package.json
└── README.md

```

## 🚀 Como rodar os testes localmente
1. Clone o repositório:
```
git clone https://github.com/vitoriall/cypress-metrix-testes.git

cd cypress-metrix-testes
```

2. Instale as dependências:
```
npm install
```
3. Execute os testes com interface gráfica:
```
npx cypress open
```
4. Ou execute no terminal (modo headless):
```
npx cypress run
```
## 🖼️ Prints automáticos

O Cypress gera automaticamente prints das telas quando algum teste falha, e os salva na pasta:
cypress/screenshots/

Esses arquivos ajudam a entender o que deu errado em cada teste. Você também pode gerar prints manuais com:
cy.screenshot('nome-do-print')

## 📌 Próximos testes a desenvolver
✅ Testes de formulário (validações e submissões)

✅ Testes de redirecionamento e falha de carregamento

✅ Testes para módulos específicos dentro de Obra

✅ Teste completo de login com diferentes perfis de usuário


---

**Feito com 💚 por Vitória Lima Albuquerque**
