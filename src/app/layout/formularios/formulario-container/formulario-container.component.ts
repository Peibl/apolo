import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-formulario-container',
    templateUrl: './formulario-container.component.html',
    styleUrls: ['./formulario-container.component.scss']
})
export class FormularioContainerComponent implements OnInit {
    paramId = 0;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.paramId = params['id'];
        });

    }

}
