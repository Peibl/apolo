import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FirebaseService} from '../../shared/services/firebase.service';
import {Client} from '../../models/client';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    animations: [routerTransition()]
})
export class ClientsComponent implements OnInit {
    clients: Client[];
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService, public firebaseservice: FirebaseService) {
    }

    ngOnInit() {
        this.firebaseservice.getClients().subscribe(clients => {
            this.clients = clients;
        });
    }


    open(content) {
        this.modalRef = this.modalService.show(content);
    }

    onSave() {
        this.modalRef.hide();
    }

    delete(event) {
        this.firebaseservice.deleteClient(event);
    }

}
