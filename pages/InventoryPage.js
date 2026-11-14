export class InventoryPage {

    constructor(page) {

        this.page = page;

        this.pageTitle =
            page.locator('.title');

        this.products =
            page.locator('.inventory_item');

        this.cart =
            page.locator('.shopping_cart_link');

        this.cartBadge =
            page.locator('.shopping_cart_badge');
    }

    async addProduct(productName) {

        const product =
            this.products.filter({
                hasText: productName
            });

        await product
            .getByRole('button', {
                name: 'Add to cart'
            })
            .click();
    }

    async openCart() {

        await this.cart.click();
    }
}