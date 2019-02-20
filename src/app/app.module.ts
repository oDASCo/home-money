import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AuthModule} from "./auth/auth.module";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
