import { expect } from '@playwright/test';

export class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.pageTitle =
            page.locator('.title');

        this.firstName =
            page.locator('#first-name');

        this.lastName =
            page.locator('#last-name');

        this.postalCode =
            page.locator('#postal-code');

        this.continueButton =
            page.getByRole('button', {
                name: 'Continue'
            });

        this.finishButton =
            page.getByRole('button', {
                name: 'Finish'
            });

        this.successMessage =
            page.locator('.complete-header');
    }

    async enterCustomerDetails(
        firstName,
        lastName,
        postalCode
    ) {

        await expect(this.pageTitle)
            .toHaveText('Checkout: Your Information');

        await this.firstName.fill(firstName);
        await expect(this.firstName).toHaveValue(firstName);

        await this.lastName.fill(lastName);

        await this.postalCode.fill(postalCode);

        await expect(this.lastName).toHaveValue(lastName);
        await expect(this.postalCode).toHaveValue(postalCode);

        await this.continueButton.click();
    }

    async finishOrder() {

        await this.finishButton.click();
    }
}