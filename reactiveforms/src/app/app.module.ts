import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employeForm/employee.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        EmployeeFormComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})

export class AppModule {

}
