import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _ProductService: ProductService) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._ProductService.getProductDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}


/*
name: String;
    desc: String;
    imageUrl: String;

this._route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.desc = data['description'];
                this.imageUrl = data['img'];
            });
            */