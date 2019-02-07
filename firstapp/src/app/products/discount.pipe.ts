import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discount'
})

export class DiscountPipe implements PipeTransform {
    transform(value: Number) {
        value = value - 5;
        return value;
    }
}
