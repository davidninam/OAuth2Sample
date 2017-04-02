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
                this.user = res.name;
                this.authenticated = res.authenticated;
            });
    }

    logout(): void{
        this.authService.logout();
    }
}
