# AI Agent MCP - Playwright Testing Project

This project contains automated tests using Playwright for testing web applications.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

- Run all tests:
  ```bash
  npm test
  ```

- Run tests in headed mode (visible browser):
  ```bash
  npm run test:headed
  ```

- Run tests with UI mode:
  ```bash
  npm run test:ui
  ```

## Project Structure

- `tests/` - Test files
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts

## Troubleshooting

- If tests fail due to missing browsers, run `npx playwright install` again.
- For CI/CD, ensure browsers are installed in the environment.
- Check the HTML report in `playwright-report/` after running tests.