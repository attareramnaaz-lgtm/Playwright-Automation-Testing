import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage.js';

import { InventoryPage } from '../pages/InventoryPage.js';

import { users } from '../test-data/users.js';

import { products } from '../test-data/products.js';


test('Add product to cart', async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    const inventoryPage =
        new InventoryPage(page);

    await page.goto('/');

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    await expect(inventoryPage.pageTitle)
        .toHaveText('Products');

    await inventoryPage.addProduct(
        products.backpack
    );

    await expect(inventoryPage.cartBadge)
        .toHaveText('1');
});