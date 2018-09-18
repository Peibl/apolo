import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
    styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {
    formularios = [];
    constructor() {
    }

    ngOnInit() {
    }

    onNewFormulario() {

    }

    delete(formulario) {
    }

    onEdit(formulatio) {
    }
}
