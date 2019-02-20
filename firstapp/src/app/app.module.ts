import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
// import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductSearch } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';

@NgModule({
    // all component & pipe
    declarations: [
        AppComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        StarComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent
    ],

    // all the module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],

    // all the services
    providers: [
        ProductService
    ],

    // only main component
    bootstrap: [AppComponent ]
})

export class AppModule {

}
