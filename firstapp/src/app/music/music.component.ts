import { Component, OnInit } from '@angular/core';
import { IMusic} from './music.model';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [ MusicService ]
})
export class MusicComponent implements OnInit {

  musicdb: IMusic[];

    constructor(private _musicService: MusicService) {

    }
    ngOnInit(): void {
        this._musicService.getMusic()
            .subscribe((item) => this.musicdb = item);
    }

}
