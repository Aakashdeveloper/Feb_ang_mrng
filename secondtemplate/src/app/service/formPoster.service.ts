import { Injectable} from '@angular/core';
import { Customer } from '../models/employee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormPosterService {
    constructor(private _httpClient: HttpClient) {}

    postCutsomer(customer: Customer): Observable<any> {
       return this._httpClient.post('http://localhost:3100/postCustomer', customer);
    }
}
