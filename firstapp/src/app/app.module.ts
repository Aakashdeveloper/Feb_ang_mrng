import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';

@NgModule({
    // all component & pipe
    declarations: [
        AppComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe
    ],

    // all the module
    imports: [
        BrowserModule,
        FormsModule
    ],

    // all th services
    providers: [],

    // only main component
    bootstrap: [AppComponent ]
})

export class AppModule {

}
