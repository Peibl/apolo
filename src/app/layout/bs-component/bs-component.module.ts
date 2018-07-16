import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BsComponentRoutingModule} from './bs-component-routing.module';
import {BsComponentComponent} from './bs-component.component';
import {ModalModule} from 'ngx-bootstrap/modal';

import {
    AlertComponent,
    ButtonsComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    RatingComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent
} from './components';
import {PageHeaderModule} from '../../shared';
import {GenericValidatorComponent} from './components/generic-validator/generic-validator.component';

@NgModule({
    imports: [
        CommonModule,
        BsComponentRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        ModalModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [
        BsComponentComponent,
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent,
        GenericValidatorComponent
    ],
    exports: [GenericValidatorComponent, ModalModule]
})
export class BsComponentModule {
}
