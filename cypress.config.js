const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adicione eventos personalizados aqui, se necessário
    },
  },
  projectId: "yy82p1", // Coloque o seu verdadeiro projectId
});
