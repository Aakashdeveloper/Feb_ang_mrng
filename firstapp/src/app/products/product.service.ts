import {Injectable} from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient} from '@angular/common/http';
// import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

    private _productUrl = 'http://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }

    getProductDetails(id): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);
    }


}

// private __http:Http)

 /*getProducts():Observable<IProduct[]>{
        return this.__http.get(this._productUrl)
            .pipe(map(this.extractData));
    }

    private extractData(res: Response){
        return res.json()
    }

     getproductss(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
                .toPromise()
                .then((res) => res.json());
    }
    */
