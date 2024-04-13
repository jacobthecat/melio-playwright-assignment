import test, { Page } from "playwright/test";
import { LoginPage } from "../pages/core/LoginPage";
import { MainPage } from "../pages/core/MainPage";

export class LoginSteps {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    static create(page: Page): LoginSteps {
        return new LoginSteps(page);
    }
    
    async login(email: string, password: string): Promise<MainPage> {
        return await test.step('Login to Melio', async () => {
            const loginPage = new LoginPage(this.page);
            await loginPage.goto();
            await loginPage.signIn(email, password);
            return new MainPage(this.page);
        });
    }

}