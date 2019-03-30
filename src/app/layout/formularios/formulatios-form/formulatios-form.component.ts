import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GenericService} from '../../../shared/services/generic.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

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
    formulario;

    form: FormGroup;
    paramId;

    constructor(public genericService: GenericService, public formBuilder: FormBuilder, public activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            id: ['', []],
            form_components: ['', []],
        });
        this.genericService.init('formularios');
        this.activatedRoute.params.forEach((params: Params) => {
            this.paramId = params['id'];
            if (this.paramId !== 'new') {
                this.genericService.init('formularios');
                this.genericService.getEntityById(this.paramId).subscribe(res => {
                    this.formulario = res;
                    this.formFormio = this.formulario.form_components;
                    this.form.get('name').setValue(this.formulario.name);
                    this.form.get('id').setValue(this.formulario.id);
                    this.form.get('form_components').setValue(this.formulario.form_components);
                    console.log(this.formulario);
                    console.log(this.form.value);
                });
            }
        });


    }

    save() {
        if (this.paramId === 'new') {
            this.genericService.addEntity(this.form.value);
        } else {
            console.log(this.form.value);
            this.genericService.updateEntity(this.form.value);
        }
        this.router.navigate(['/formularios']);
    }


    onChange(event) {
        this.form.get('form_components').setValue(event.form);
    }

}
