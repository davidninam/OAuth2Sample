import {Credentials} from "./credentials";

export class Authentication{

    constructor(){
        this.id = null;
        this.authenticated = false;
        this.credentials = new Credentials();
    }

    public id: string;
    public authenticated: boolean;
    public credentials: Credentials;
}