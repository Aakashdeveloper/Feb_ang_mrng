import { Component, OnInit} from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    // attribute
    // selector: '[app-product]',
    // class
    // selector: '.app-product',
    selector: 'app-product',
    templateUrl: './product.component.html',
    // styles: ['thead{color:teal;font-size:20px}','h4{color:tomato}'],
    styleUrls: ['./product.component.css' ],
    styles: [
        `.online{
            background-color:wheat
        }`
    ]
})

export class ProductComponent implements OnInit {
    title: String = '~~Product List~~';
    filterText: String  = 'Number Of Product Filter:';
    filterData: String;
    showImage: Boolean = false;
    imageWidth: Number = 100;
    emitValue: String;
    updatedValue = '';
    serverStatus: String = 'offline';
    products: IProduct[];

    constructor(private _productService: ProductService) {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    // show hide image
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecive(message: string): void {
        this.emitValue = message;
    }

    onUpdateInputValue(event: Event): void {
        this.updatedValue = (<HTMLInputElement>event.target).value;
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }
}


