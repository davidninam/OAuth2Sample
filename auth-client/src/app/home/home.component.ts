import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    user: Observable<string>;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.getCredentials();
        this.user = this.authService.authentication.map(auth => auth.name);
    }
}
