import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientsRoutingModule} from './clients-routing.module';
import {ClientsComponent} from './clients.component';
import {PageHeaderModule} from '../../shared';
import {BsComponentModule} from '../bs-component/bs-component.module';
import {NewClientFormComponent} from './new-client-form/new-client-form/new-client-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, ClientsRoutingModule, PageHeaderModule, BsComponentModule, ReactiveFormsModule, FormsModule],
    declarations: [ClientsComponent, NewClientFormComponent]
})
export class ClientsModule {
}
