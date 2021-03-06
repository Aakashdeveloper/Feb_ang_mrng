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

function emailMatcher(c: AbstractControl) {
    const emailControl = c.get('email');
    const confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return {'match': true};
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
            // email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
                confirmEmail: ['', Validators.required ]
            }, {validator: emailMatcher}),
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
