import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.comoponent';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CustomerFormComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [],
})

export class AppModule {}
