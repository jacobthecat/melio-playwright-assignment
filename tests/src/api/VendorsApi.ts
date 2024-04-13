import { Page } from "playwright-core"

export class VendorsApi {
    readonly page: Page;
    readonly url: string
    
    constructor(page: Page) {
        this.page = page;
        this.url = 'https://partnerships.alpha.melioservices.com/v1/vendors';
    }
    
    async createVendor(businessName: string, contactName: string, emailAddress: string, phoneNumber: string) {
        await this.page.request.post(this.url, {
            data: {
                name: businessName,
                contact: {
                    name: contactName,
                    email: emailAddress,
                    phoneNumber: phoneNumber
                }
            }
        })
    }  
}