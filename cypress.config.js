const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/saucedemo.spec.cy.js", // Adjust this pattern as per your test files
    supportFile: false,
  },
});
