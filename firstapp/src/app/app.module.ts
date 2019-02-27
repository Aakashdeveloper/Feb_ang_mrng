import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { StarComponent } from './shared/star.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';

@NgModule({
    // all component & pipe
    declarations: [
        AppComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent
    ],

    // all the module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'orders', component: OrderComponent},
            { path: 'home', component: HomeComponent},
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: '**', component: NotFoundComponent}
        ]),
        ProductModule
    ],
    // all the services
    providers: [],
    // only main component
    bootstrap: [AppComponent ]
})
export class AppModule {}
