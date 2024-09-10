const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Page', () => {
  test('should log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('username', 'password');
    await expect(page).toHaveURL(/dashboard/);
  });
});
