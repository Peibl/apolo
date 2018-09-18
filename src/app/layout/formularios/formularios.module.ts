import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from '../../shared';
import {BsComponentModule} from '../bs-component/bs-component.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormulariosComponent} from './formularios.component';
import {FormulariosRoutingModule} from './formularios-routing.module';
import {FormulatiosFormComponent} from './formulatios-form/formulatios-form.component';
import {FormioModule} from 'angular-formio';
import { FormularioContainerComponent } from './formulario-container/formulario-container.component';

@NgModule({
    imports: [CommonModule, FormulariosRoutingModule, PageHeaderModule, BsComponentModule, ReactiveFormsModule, FormsModule, FormioModule],
    declarations: [FormulariosComponent, FormulatiosFormComponent, FormularioContainerComponent]
})
export class FormulariosModule {
}
