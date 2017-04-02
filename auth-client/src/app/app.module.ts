import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AppRouterModule} from "./app.routes";
import { SecureComponent } from './secure/secure.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SecureComponent
    ],
    imports: [
        SharedModule,
        AppRouterModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
