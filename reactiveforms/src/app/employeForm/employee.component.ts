import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reactive',
    templateUrl: './employee.component.html'
})

export class EmployeeFormComponent {
    employeeForm: FormGroup;
}
