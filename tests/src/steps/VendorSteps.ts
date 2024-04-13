import test, { Page } from "playwright/test";
import { MainPage } from "../pages/core/MainPage";
import { AddNewVendorPage } from "../pages/pay/AddNewVendorPage";
import { VendorPaymentMethodSelectionPage } from "../pages/pay/VendorPaymentMethodSelectionPage";

export class VendorSteps {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    static create(page: Page): VendorSteps {
        return new VendorSteps(page);
    }

    async addVendor(businessName: string, contactName: string, emailAddress: string, phoneNumber: string): Promise<void> {
        await test.step('Add new vendor', async () => {
            const mainPage = new MainPage(this.page);
            const addNewVendorPage = new AddNewVendorPage(this.page);
            const vendorPaymentMethodSelectionPage = new VendorPaymentMethodSelectionPage(this.page);
        
            await mainPage.clickAddVendor();
            await addNewVendorPage.addNewVendor(businessName, contactName, emailAddress, phoneNumber);            
            await vendorPaymentMethodSelectionPage.clickSkipForNow();
        });
    }

}