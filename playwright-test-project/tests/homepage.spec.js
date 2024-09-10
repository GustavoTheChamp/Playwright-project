const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('Homepage', () => {
  test('has correct title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    expect(await homePage.getTitle()).toBe('Playwright');
  });

  test('can navigate to Get Started', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.clickGetStarted();
    await expect(page).toHaveURL(/.*docs\/intro/);
  });
});