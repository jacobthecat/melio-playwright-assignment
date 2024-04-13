import { Page, Locator } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly addVendorBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addVendorBtn = page.getByTestId('vendors-tab-add-vendor-button');
    }

    async waitForPageToLoad() {
        await this.addVendorBtn.waitFor({timeout: 60000})
    }

    async clickAddVendor() {
        await this.addVendorBtn.click();
    }

}