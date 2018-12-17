import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GenericService} from '../../../shared/services/generic.service';

@Component({
    selector: 'app-formulario-container',
    templateUrl: './formulario-container.component.html',
    styleUrls: ['./formulario-container.component.scss'],
    providers: [GenericService]

})
export class FormularioContainerComponent implements OnInit {
    paramId = 0;
    formulario;

    constructor(private activatedRoute: ActivatedRoute, public genericService: GenericService) {
    }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.paramId = params['id'];
            this.genericService.init('formularios');
            this.genericService.getEntityById(this.paramId).subscribe(res => {
                this.formulario = res;
            });
        });

    }

    onSubmit(event) {
        console.log(event);
    }

}
