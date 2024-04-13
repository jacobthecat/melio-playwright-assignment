import { Page, Locator } from '@playwright/test';

export class VendorPaymentMethodSelectionPage {
    readonly page: Page;
    readonly skipForNow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.skipForNow = page.getByTestId('layout-next-button');
    }

    async clickSkipForNow() {
        await this.skipForNow.click();
    }

}