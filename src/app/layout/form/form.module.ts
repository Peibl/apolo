import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormRoutingModule} from './form-routing.module';
import {FormComponent} from './form.component';
import {PageHeaderModule} from './../../shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
    declarations: [FormComponent]
})
export class FormModule {
}
