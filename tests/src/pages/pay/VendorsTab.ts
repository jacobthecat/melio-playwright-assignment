import { Page, Locator } from '@playwright/test';
import { VendorPane } from './VendorPane';

export class VendorsTab {
    readonly page: Page;
    readonly searchBar: Locator;
    readonly vendorPane: VendorPane;

    constructor(page: Page) {
        this.page = page;
        this.vendorPane = new VendorPane(page);
        this.searchBar = page.getByTestId('search-input');
    }

    async search(text: string) {
        await this.searchBar.fill(text);
        await this.page.keyboard.press('Enter');
    }

    async clickVendor(vendorName: string) {
        await this.page.getByRole('link', { name: vendorName }).click();
    }

}