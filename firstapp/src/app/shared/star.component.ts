import { Component, OnInit, OnChanges, OnDestroy,
        Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges, OnDestroy {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    constructor() {
        console.log('>>>construct');
    }

    ngOnChanges(): void {
        console.log('changes');
        this.starWidth = this.rating * 86 / 6;
    }

    ngOnInit(): void {
        console.log('init');
    }

    ngOnDestroy(): void {
        console.log('destroy');
    }

    onStar(): void {
        this.ratingClicked.emit(`Rating clicked is ${this.rating}`);
    }

}
