import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // all component & pipe
    declarations: [
        AppComponent,
        ProductComponent
    ],

    // all the module
    imports: [
        BrowserModule
    ],

    // all th services
    providers: [],

    // only main component
    bootstrap: [AppComponent ]
})

export class AppModule {

}
