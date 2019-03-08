import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/employee.model';
import { NgForm} from '@angular/forms';
import { FormPosterService } from '../service/formPoster.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  languages: any[] = ['AngularJs', 'NodeJs', 'Python'];
  model = new Customer('John', 'Andy', '12345678', 'a@a', true, 'male', 'NodeJs');
  hasCodeLangError: Boolean = false;

  firstToUpper(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  validateCodeLang(event): void {
    if (this.model.codelang === 'default') {
        this.hasCodeLangError = true;
    } else  {
      this.hasCodeLangError = false;
    }
  }

  formSubmit(form: NgForm) {
    this.formPosterService.postCutsomer(form.value)
      .subscribe((res) => console.log(`Post SuccessFul ${res}`));
  }
  constructor(private formPosterService: FormPosterService) { }

  ngOnInit() {

  }

}
