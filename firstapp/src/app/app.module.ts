import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
    // all component & pipe
    declarations: [
        AppComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent,
        MoviesComponent
    ],

    // all the module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        AppRoutingModule
    ],
    // all the services
    providers: [],
    // only main component
    bootstrap: [AppComponent ]
})
export class AppModule {}
