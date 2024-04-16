import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly tshirt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tshirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }

    async selectTShirt() {
        await this.tshirt.click();
    }

}