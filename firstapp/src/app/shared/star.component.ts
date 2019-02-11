import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html'
})

export class StarComponent implements OnInit, OnChanges, OnDestroy {

    rating: number;
    starWidth: number;

    constructor() {
        console.log('>>>construct');
    }

    ngOnChanges(): void {
        console.log('changes');
        this.starWidth = this.rating * 86 / 5;
    }

    ngOnInit(): void {
        console.log('init');
    }

    ngOnDestroy(): void {
        console.log('destroy');
    }

}
