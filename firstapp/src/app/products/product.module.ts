import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductSearch } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { RouterGaurds } from './router-gaurds.service';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductComponent},
            { path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
        ])
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        RouterGaurds
    ]
})

export class ProductModule {}
