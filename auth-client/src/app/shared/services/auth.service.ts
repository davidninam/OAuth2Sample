import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {Observable, Subject} from "rxjs";
import {Authentication} from "../entities/authentication";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    private _authentication: Subject<Authentication>;

    constructor(
        private http: HttpService,
        private router: Router
    ) {
        this._authentication = new Subject<Authentication>();
    }

    public get authentication(): Observable<Authentication>{
        return this._authentication.asObservable();
    }

    public getCredentials(): void{
        this.http.get('/api/user').subscribe(res => {
            this._authentication.next(res);
        });
    }

    logout(): void{
        this.http.post('/api/logout').subscribe(() => {
            let auth: Authentication = {
                name: null,
                authenticated: false
            };
            this._authentication.next(auth);
            this.router.navigate(['']);
        });
    }
}
