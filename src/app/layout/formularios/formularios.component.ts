import {Component, OnInit} from '@angular/core';
import {GenericService} from '../../shared/services/generic.service';
import {Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
    styleUrls: ['./formularios.component.scss'],
    providers: [GenericService, ApiService]
})
export class FormulariosComponent implements OnInit {
    formularios = [];

    constructor(public genericService: GenericService, private router: Router, public apiService: ApiService) {
    }

    ngOnInit() {
        this.genericService.init('formularios');
        this.genericService.getEntitys().subscribe(formularios => {
            console.log(formularios);
            this.formularios = formularios;
        });

        this.apiService.getForms().subscribe(formularios => {
            console.log(formularios);
        });


    }

    onNewFormulario() {

    }

    delete(formulario) {
        this.genericService.deleteEntity(formulario);
    }

    onEdit(formulario) {
        this.router.navigate(['/formularios/', formulario.id]);
    }
}
