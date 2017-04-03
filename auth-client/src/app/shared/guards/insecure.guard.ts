import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../services/auth.service";
import {Location} from "@angular/common";

@Injectable()
export class InsecureGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authService.authentication
            .map(auth => auth.authenticated)
            .take(1)
            .subscribe(authenticated => {
                if(authenticated) this.router.navigate(['home']);
            });
        return this.authService.authentication.map(auth => !auth.authenticated);
    }
}
