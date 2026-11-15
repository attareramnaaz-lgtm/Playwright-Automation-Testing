import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';

import { users } from '../test-data/users.js';


test('Valid login', async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await page.goto('/');

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    await expect(page)
        .toHaveURL(/inventory.html/);

    await expect(page.locator('.title'))
        .toHaveText('Products');
});


test('Invalid login', async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await page.goto('/');

    await loginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
    );

    await expect(loginPage.errorMessage)
        .toBeVisible();
});


test('Locked user login', async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await page.goto('/');

    await loginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
    );

    await expect(loginPage.errorMessage)
        .toContainText('locked out');
});