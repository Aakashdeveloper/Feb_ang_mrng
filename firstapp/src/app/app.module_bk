import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterGaurds } from './products/router-gaurds.service';

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
        NotFoundComponent,
        ProductDetailComponent
    ],

    // all the module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductComponent},
            { path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
            { path: 'orders', component: OrderComponent},
            { path: 'home', component: HomeComponent},
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: '**', component: NotFoundComponent}
        ])

    ],

    // all the services
    providers: [
        ProductService,
        RouterGaurds
    ],

    // only main component
    bootstrap: [AppComponent ]
})

export class AppModule {

}
