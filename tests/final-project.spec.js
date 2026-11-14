import { test, expect } from '../fixtures/test.js';

import { users } from '../test-data/users.js';

import { products } from '../test-data/products.js';

import { checkoutData } from '../test-data/checkoutdata.js';


test(
    'Complete e-commerce purchase flow',
    async ({
        page,
        loginPage,
        inventoryPage,
        cartPage,
        checkoutPage
    }) => {

        // STEP 1 — Open application

        await page.goto('/');


        // STEP 2 — Login

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );


        // STEP 3 — Verify Products page

        await expect(
            inventoryPage.pageTitle
        ).toHaveText('Products');


        // STEP 4 — Add Backpack

        await inventoryPage.addProduct(
            products.backpack
        );


        // STEP 5 — Add Bike Light

        await inventoryPage.addProduct(
            products.bikeLight
        );


        // STEP 6 — Verify cart count

        await expect(
            inventoryPage.cartBadge
        ).toHaveText('2');


        // STEP 7 — Open cart

        await inventoryPage.openCart();


        // STEP 8 — Verify Backpack

        await expect(
            cartPage.getProduct(products.backpack)
        ).toBeVisible();


        // STEP 9 — Verify Bike Light

        await expect(
            cartPage.getProduct(products.bikeLight)
        ).toBeVisible();


        // STEP 10 — Checkout

        await cartPage.checkout();


        // STEP 11 — Enter customer details

        await checkoutPage.enterCustomerDetails(
            checkoutData.firstName,
            checkoutData.lastName,
            checkoutData.postalCode
        );


        // STEP 12 — Finish order

        await checkoutPage.finishOrder();


        // STEP 13 — Verify successful order

        await expect(
            checkoutPage.successMessage
        ).toHaveText(
            'Thank you for your order!'
        );

    }
);

//Negative Login Test
test(
    'Verify invalid login',
    async ({
        page,
        loginPage
    }) => {

        await page.goto('/');

        await loginPage.login(
            users.invalidUser.username,
            users.invalidUser.password
        );

        await expect(
            loginPage.errorMessage
        ).toBeVisible();

    }
);

//Locked User Test
test(
    'Verify locked user cannot login',
    async ({
        page,
        loginPage
    }) => {

        await page.goto('/');

        await loginPage.login(
            users.lockedUser.username,
            users.lockedUser.password
        );

        await expect(
            loginPage.errorMessage
        ).toBeVisible();

    }
);