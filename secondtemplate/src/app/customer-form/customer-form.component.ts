import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  languages: any[] = ['AngularJs', 'NodeJs', 'Python'];
  model = new Employee('John', 'Andy', true, 'male', 'NodeJs');

  firstToUpper(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
