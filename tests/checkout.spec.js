import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';

import { InventoryPage } from '../pages/InventoryPage.js';

import { CartPage } from '../pages/CartPage.js';

import { CheckoutPage } from '../pages/CheckoutPage.js';

import { users } from '../test-data/users.js';

import { products } from '../test-data/products.js';

import { checkoutData } from '../test-data/checkoutData.js';


test('Complete checkout journey', async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    const inventoryPage =
        new InventoryPage(page);

    const cartPage =
        new CartPage(page);

    const checkoutPage =
        new CheckoutPage(page);


    // Step 1 - Open application

    await page.goto('/');


    // Step 2 - Login

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );


    // Step 3 - Verify Products page

    await expect(inventoryPage.pageTitle)
        .toHaveText('Products');


    // Step 4 - Add product

    await inventoryPage.addProduct(
        products.backpack
    );


    // Step 5 - Open cart

    await inventoryPage.openCart();


    // Step 6 - Verify product in cart

    await expect(
        cartPage.getProduct(products.backpack)
    ).toBeVisible();


    // Step 7 - Checkout

    await cartPage.checkout();


    // Step 8 - Enter customer details

    await checkoutPage.enterCustomerDetails(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );


    // Step 9 - Complete order

    await checkoutPage.finishOrder();


    // Step 10 - Verify order

    await expect(
        checkoutPage.successMessage
    ).toHaveText(
        'Thank you for your order!'
    );

    // Capture checkout confirmation
    await page.screenshot({
    path: 'screenshots/checkout-success.png',
    fullPage: true
});
});