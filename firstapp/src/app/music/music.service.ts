import {Injectable} from '@angular/core';
import { IMusic } from './music.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MusicService {

    private _musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

    constructor(private _http: HttpClient) {}

    getMusic(): Observable<IMusic[]> {
        return this._http.get<IMusic[]>(this._musicUrl);
    }
}
