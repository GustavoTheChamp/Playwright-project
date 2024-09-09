const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('has working navigation', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('text=Docs');
    await expect(page).toHaveURL(/.*docs/);
  });
});