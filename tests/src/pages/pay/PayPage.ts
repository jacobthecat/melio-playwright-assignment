import { Page } from '@playwright/test';
import { VendorsTab } from './VendorsTab';

export class PayPage {
    readonly page: Page;
    readonly vendorsTab: VendorsTab;

    constructor(page: Page) {
        this.page = page;
        this.vendorsTab = new VendorsTab(this.page);
    }

}