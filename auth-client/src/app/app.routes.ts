import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {InsecureGuard} from "./shared/guards/insecure.guard";
import {SecureGuard} from "./shared/guards/secure.guard";
import {SecureComponent} from "./secure/secure.component";

let APP_ROUTES: any[] = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [
            InsecureGuard
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [
            SecureGuard
        ]
    },
    {
        path: 'secure',
        component: SecureComponent,
        canActivate: [
            SecureGuard
        ]
    },
    {
        path: '**',
        redirectTo: '/'
    }

];
export let AppRouterModule = RouterModule
    .forRoot(
        APP_ROUTES ,
        {
            useHash: false
        }
    );