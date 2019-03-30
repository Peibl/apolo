import {Component, OnInit} from '@angular/core';
import {GenericService} from '../../shared/services/generic.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
    styleUrls: ['./formularios.component.scss'],
    providers: [GenericService]
})
export class FormulariosComponent implements OnInit {
    formularios = [];

    constructor(public genericService: GenericService, private router: Router) {
    }

    ngOnInit() {
        this.genericService.init('formularios');
        this.genericService.getEntitys().subscribe(formularios => {
            this.formularios = formularios;
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
