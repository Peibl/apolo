import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GenericService} from '../../../shared/services/generic.service';
import {TableModule} from 'primeng/table';

@Component({
    selector: 'app-formulario-container',
    templateUrl: './formulario-container.component.html',
    styleUrls: ['./formulario-container.component.scss'],
    providers: [GenericService]

})
export class FormularioContainerComponent implements OnInit {
    paramId = 0;
    formulario;
    cars = [];
    cols = [];

    constructor(private activatedRoute: ActivatedRoute, public genericService: GenericService) {
    }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.paramId = params['id'];
            this.genericService.init('formularios');
            this.genericService.getEntityById(this.paramId).subscribe(res => {
                this.formulario = res;
                console.log(this.formulario);
                this.cols = this.formulario.form_components.components.map(value => {
                    return {header: value.label, field: value.key};
                });
                console.log(this.cols);
            });
        });

    }

    onSubmit(event) {
        console.log(event);
    }

}
