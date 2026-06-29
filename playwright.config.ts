import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './src/tests',

  timeout: 120000,

  retries: 1,

  use: {

    baseURL: 'https://ndosisimplifiedautomation.vercel.app/',

    headless: false,

    viewport: null,

    launchOptions: {
      args: ['--start-maximized']
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  reporter: [
    ['html'],
    ['list']
  ]
});