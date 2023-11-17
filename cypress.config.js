const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wfj4jj",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //"baseUrl": "https://app.doorloop.com",
  "chromeWebSecurity": false
  },
});
