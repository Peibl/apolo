import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    animations: [routerTransition()]
})
export class ClientsComponent implements OnInit {
    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
    }


    open(content) {
        this.modalService.open(content);
    }
}
