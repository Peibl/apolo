import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FirebaseService} from '../../shared/services/firebase.service';
import {Client} from '../../models/client';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    animations: [routerTransition()]
})
export class ClientsComponent implements OnInit {
    clients: Client[];

    constructor(private modalService: NgbModal, public firebaseservice: FirebaseService) {
    }

    ngOnInit() {
        this.firebaseservice.getClients().subscribe(clients => {
            this.clients = clients;
        });
    }


    open(content) {
        this.modalService.open(content);
    }
}
