import {Component, OnInit} from '@angular/core';
import {GenericService} from '../../shared/services/generic.service';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
    styleUrls: ['./formularios.component.scss'],
    providers: [GenericService]
})
export class FormulariosComponent implements OnInit {
    formularios = [];

    constructor(public genericService: GenericService) {
    }

    ngOnInit() {
        this.genericService.init('formularios');
        this.genericService.getEntitys().subscribe(clients => {
            // this.clients = clients;
            console.log(clients);
        });
    }

    onNewFormulario() {

    }

    delete(formulario) {
    }

    onEdit(formulatio) {
    }
}
