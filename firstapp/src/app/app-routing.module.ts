import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { MusicComponent } from './music/music.component';

import { RouterGaurds } from './products/router-gaurds.service';

const routes: Routes = [
    { path: 'products', component: ProductComponent},
    { path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
    { path: 'orders', component: OrderComponent},
    { path: 'music', component: MusicComponent},
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    providers: [ RouterGaurds],
    exports: [ RouterModule]
})

export class AppRoutingModule {}
