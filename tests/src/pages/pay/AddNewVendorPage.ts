import { Page, Locator } from '@playwright/test';
import { urlToHttpOptions } from 'url';

export class AddNewVendorPage {
    readonly page: Page;
    readonly businessName: Locator;
    readonly contactName: Locator;
    readonly emailAddress: Locator;
    readonly phoneNumber: Locator;
    readonly continueBtn: Locator;
    readonly emailError: Locator;
    readonly businessNameError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.businessName = page.getByTestId('form-input-companyName');
        this.contactName = page.getByTestId('form-input-fullName');
        this.emailAddress = page.getByTestId('form-input-email');
        this.phoneNumber = page.getByTestId('form-input-phone');
        this.continueBtn = page.getByTestId('continue-button');
        this.emailError = page.getByTestId('form-error-message-email');
        this.businessNameError = page.getByTestId('form-error-message-companyName');
    }

    async enterBusinessName(businessName: string) {
        // possible issue here: click on Continue happens before field validation event fired causing untrue validation error
        // a more deep dive should be done to the root cause and solve this either on dev side or in a more elegant way here
        await this.businessName.clear();
        await this.businessName.pressSequentially(businessName, { delay: 30 });
    }

    async enterContactName(contactName: string) {
        await this.contactName.fill(contactName);
    }

    async enterEmailAddress(emailAddress: string) {
        await this.emailAddress.fill(emailAddress);
    }

    async enterPhoneNumber(phoneNumber: string) {
        await this.phoneNumber.fill(phoneNumber);
    }

    async clickContinue() {
        await this.continueBtn.click();
    }

    async addNewVendor(businessName: string, contactName: string, emailAddress: string, phoneNumber: string) {
        await this.enterBusinessName(businessName);
        await this.enterContactName(contactName);
        await this.enterEmailAddress(emailAddress);
        await this.enterPhoneNumber(phoneNumber);
        await this.clickContinue();
    }

}