import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchFilter'
})

export class ProductSearch implements PipeTransform {
    transform(value: any[], userInput: String) {
        userInput = userInput ? userInput.toLowerCase() : null;

        return userInput ? value.filter(( product ) => (
            (product.productCode.toLowerCase().indexOf(userInput) !== -1) ||
            (product.productName.toLowerCase().indexOf(userInput) !== -1)
         )) : value;
    }
}






/*
var ages = [32, 33, 16, 40];

const checkAdult = (age) => {return age >= 18}

{ages.filter((age) => {return age>18}
    */