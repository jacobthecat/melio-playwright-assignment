import { Vendor } from "../entities/Vendor";
import { randomUUID } from "crypto";

export class VendorUtil {

    static generateVendor(): Vendor {
        const uniqueId = randomUUID();
        const businessName = `HA-Auto-Vendor-${uniqueId}`;
        const emailAddress = `ha-auto-vendor-${uniqueId}@melio.com`;
        const phoneNumber = '(555) 555-5555';
        const contactName = 'HA-Auto-Vendor';
        return new Vendor(businessName, contactName, emailAddress, phoneNumber);
    }
    
}