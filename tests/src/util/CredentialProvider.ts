import { Credentials } from "../entities/Credentials";

export class CredentialsProvider {

    // this is just a simplified hardcoded version for the home assignment, 
    // in a real project the credentials shouldn't be here and fetched from somewhere (ex. service/db)
    static getCredentials(): Credentials {
        return new Credentials('automation.home@melio.com', 'vH4iLixIFp');
    }

}
