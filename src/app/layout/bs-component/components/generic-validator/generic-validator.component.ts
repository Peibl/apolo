import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-generic-validator',
    templateUrl: './generic-validator.component.html',
    styleUrls: ['./generic-validator.component.scss']
})
export class GenericValidatorComponent implements OnInit {

    @Input() title;
    @Input() errorMesagge = 'requerido';
    @Input() form: FormGroup;
    @Input() controlName;
    @Input() labelClass = 'col-sm-3 control-label';
    @Input() inputClass = 'col-sm-9';

    constructor() {
    }

    ngOnInit() {
    }

    get control() {
        return this.form.get(this.controlName);
    }


}
