import test, { expect } from "playwright/test";
import { MainPage } from "../pages/core/MainPage";
import { AddNewVendorPage } from "../pages/pay/AddNewVendorPage";
import { PayPage } from "../pages/pay/PayPage";
import { VendorUtil } from "../util/VendorUtil";
import { LoginSteps } from "../steps/LoginSteps";
import { VendorSteps } from "../steps/VendorSteps";
import { CredentialsProvider } from "../util/CredentialProvider"

test.beforeEach('Login to Melio', async ({ page }) => {
    const melioUser = CredentialsProvider.getCredentials();
    const mainPage = await LoginSteps.create(page).login(melioUser.email, melioUser.password);
    await mainPage.waitForPageToLoad();
})

test('Add new vendor and verify vendor details', async ({ page }) => {
    const payPage = new PayPage(page);
    const vendor = VendorUtil.generateVendor();
    await VendorSteps.create(page).addVendor(vendor.name, vendor.contact, vendor.email, vendor.phone);
    await payPage.vendorsTab.search(vendor.name);
    await expect(payPage.vendorsTab.getVendor(vendor.name)).toBeVisible();
    await payPage.vendorsTab.clickVendor(vendor.name);

    await expect(payPage.vendorsTab.vendorPane.businessName).toHaveValue(vendor.name);
    await expect(payPage.vendorsTab.vendorPane.contactName).toHaveValue(vendor.contact);
    await expect(payPage.vendorsTab.vendorPane.emailAddress).toHaveValue(vendor.email);
    await expect(payPage.vendorsTab.vendorPane.phoneNumber).toHaveValue(vendor.phone);
})

test('Verify field verification when adding new vendor', async ({ page }) => {
    const duplicateCompanyErr = 'Company already exists, please choose a different name';
    const invalidEmailErr = 'Enter a valid email address.';

    const existingVendor = VendorUtil.generateVendor();
    const vendor = VendorUtil.generateVendor();
    const mainPage = new MainPage(page);
    const addNewVendorPage = new AddNewVendorPage(page);
    
    await new VendorSteps(page).addVendor(existingVendor.name, existingVendor.contact, existingVendor.email, existingVendor.phone);

    await mainPage.clickAddVendor();
    await addNewVendorPage.addNewVendor(existingVendor.name, existingVendor.contact, existingVendor.email, existingVendor.phone);
    await expect(addNewVendorPage.businessNameError).toHaveText(duplicateCompanyErr);

    await addNewVendorPage.addNewVendor(vendor.name, vendor.contact, vendor.email.replace('@','#'), vendor.phone);
    await expect(addNewVendorPage.emailError).toHaveText(invalidEmailErr);
})