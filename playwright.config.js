// @ts-check
import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e-tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //eslint-disable-next-line no-undef
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //eslint-disable-next-line no-undef
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //eslint-disable-next-line no-undef
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'null',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    //eslint-disable-next-line no-undef
    baseURL: `http://localhost:${process.env.PORT || 5000}`,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'never',
    // headless: false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chromium',
        // executablePath: "C:/Users/USER/AppData/Local/ms-playwright/chromium/chrome-win/"
      },
    },

    //    {
    //      name: 'firefox',
    //      use: { ...devices['Desktop Firefox'] },
    //    },

    //    {
    //      name: 'webkit',
    //      use: { ...devices['Desktop Safari'] },
    //    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run start-prod',
    // url: 'http://127.0.0.1:3000',
    // reuseExistingServer: !process.env.CI,
  },
})

