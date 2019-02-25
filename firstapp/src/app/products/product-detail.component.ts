import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    name: String;
    desc: String;
    imageUrl: String;

    constructor(private _route: ActivatedRoute,
            private _router: Router) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.desc = data['description'];
                this.imageUrl = data['img'];
            });
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
