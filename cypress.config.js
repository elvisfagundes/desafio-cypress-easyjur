const { defineConfig } = require("cypress");
const { GenerateCtrfReport } = require('cypress-ctrf-json-reporter')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, './.env') })

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    requestTimeout: 30000,
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      new GenerateCtrfReport({
        on,
      })
    },
  },
  env: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    username: process.env.CYPRESS_USERNAME,
    password: process.env.CYPRESS_PASSWORD
  },
});
