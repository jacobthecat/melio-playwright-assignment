import { Page, Locator } from '@playwright/test';


export class LoginPage {
    readonly page: Page;
    readonly companyEmail: Locator;
    readonly password: Locator;
    readonly signInBtn: Locator;
    readonly url: string = 'https://alpha-app.meliopayments.com/login';

    constructor(page: Page) {
        this.page = page;
        this.companyEmail = page.getByTestId('input-email');
        this.password = page.getByTestId('input-password');
        this.signInBtn = page.getByTestId('button-auth.signIn.buttonLabel');
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async enterCompanyEmail(email: string) {
        await this.companyEmail.fill(email);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickSignIn() {
        await this.signInBtn.click();
    }

    async signIn(email: string, password: string) {
        await this.enterCompanyEmail(email);
        await this.enterPassword(password);
        await this.clickSignIn();
    }

}