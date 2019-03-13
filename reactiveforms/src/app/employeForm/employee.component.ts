import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,
         Validators,
         AbstractControl } from '@angular/forms';

function ratingRange(min: Number, max: Number) {
    return(c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
                return {'range': true};
            }
                return null;
            };
}

@Component({
    selector: 'app-reactive',
    templateUrl: './employee.component.html'
})



export class EmployeeFormComponent implements OnInit {
    employeeForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(5)]],
            email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
            rating: ['', [Validators.required, ratingRange(1, 5)]],
            phone: [''],
            notification: []
        });
    }

    populateData(): void {
        this.employeeForm.patchValue({
            email: 'j@a.com'
        });
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.employeeForm.get('phone');
        if (notifyVia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }

    save(): void {

    }
}



/*
populateData(): void {
        this.employeeForm.setValue({
            firstName: 'John',
            lastName: 'andy',
            email: 'j@a.com'
        });
    }
*/
