import { Page, Locator } from '@playwright/test';

export class VendorPane {
    readonly page: Page;
    readonly businessName: Locator;
    readonly contactName: Locator;
    readonly emailAddress: Locator;
    readonly phoneNumber: Locator;

    constructor(page: Page) {
        this.page = page;
        this.businessName = page.getByTestId('form-input-companyName');
        this.contactName = page.getByTestId('form-input-fullName');
        this.emailAddress = page.getByTestId('form-input-email');
        this.phoneNumber = page.getByTestId('form-input-phone');
    }

}