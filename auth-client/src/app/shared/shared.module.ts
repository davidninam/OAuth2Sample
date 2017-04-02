import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthService} from "./services/auth.service";
import {HttpService} from "./services/http.service";
import {SecureGuard} from "./guards/secure.guard";
import {InsecureGuard} from "./guards/insecure.guard";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        AuthService,
        HttpService,
        SecureGuard,
        InsecureGuard
    ],
    exports: [
        BrowserModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule {
}
