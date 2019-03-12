import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
            email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]]
        });
    }

    populateData(): void {
        this.employeeForm.patchValue({
            email: 'j@a.com'
        });
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
