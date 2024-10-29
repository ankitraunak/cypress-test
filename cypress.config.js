const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/saucedemo.spec.cy.js", 
    supportFile: false,
    video: true, // Enable video recording of tests
    screenshotsFolder: "cypress/screenshots", // Folder for screenshots
    videosFolder: "cypress/videos", // Folder for videos
    reporter: "mochawesome", // Use mochawesome as the reporter
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report", // Directory for the report
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
