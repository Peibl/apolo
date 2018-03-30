import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientsRoutingModule} from './clients-routing.module';
import {ClientsComponent} from './clients.component';
import {PageHeaderModule} from '../../shared';
import {BsComponentModule} from '../bs-component/bs-component.module';

@NgModule({
    imports: [CommonModule, ClientsRoutingModule, PageHeaderModule, BsComponentModule],
    declarations: [ClientsComponent]
})
export class ClientsModule {
}
