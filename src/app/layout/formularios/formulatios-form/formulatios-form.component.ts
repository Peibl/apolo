import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GenericService} from '../../../shared/services/generic.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-formulatios-form',
    templateUrl: './formulatios-form.component.html',
    styleUrls: ['./formulatios-form.component.scss'],
    providers: [GenericService]
})
export class FormulatiosFormComponent implements OnInit {
    @ViewChild('json') jsonElement?: ElementRef;
    public formFormio: Object = {
        components: []
    };
    labelClass = 'col-sm-3 control-label';
    inputClass = 'col-sm-9';

    form: FormGroup;

    constructor(public genericService: GenericService, public formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.genericService.init('formularios');
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
        });

    }

    save() {
        this.genericService.addEntity(this.form.value);
    }


    onChange(event) {
        this.jsonElement.nativeElement.innerHTML = '';
        this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    }

}
