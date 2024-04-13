
export class Vendor {
    private _name: string;
    private _contact: string;
    private _email: string;
    private _phone: string;

    constructor(name: string, contact: string, email: string, phone: string) {
        this._name = name;
        this._contact = contact;
        this._email = email;
        this._phone = phone;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get contact(): string {
        return this._contact;
    }

    set contact(contact: string) {
        this._contact = contact;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(phone: string) {
        this._phone = phone;
    }

}