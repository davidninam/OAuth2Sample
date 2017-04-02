import {Component, OnInit} from "@angular/core";
import {AuthService} from "./shared/services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    user: any;
    authenticated: boolean;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.authentication
            .subscribe(res => {
                this.authenticated = res.authenticated;

                if(!res.credentials || !res.credentials.name) return;
                this.user = res.credentials.name;
            });
    }

    logout(): void{
        this.authService.logout();
    }
}
