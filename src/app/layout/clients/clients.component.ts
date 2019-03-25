import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Client} from '../../models/client';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    animations: [routerTransition()]
})
export class ClientsComponent implements OnInit {
    clients;
    modalRef: BsModalRef;
    clientRequest;

    constructor(private modalService: BsModalService, db: AngularFireDatabase) {
        this.clients = db.object('clients').valueChanges();
    }

    ngOnInit() {
        // this.firebaseservice.getClients().subscribe(clients => {
        //     this.clients = clients;
        // });
    }

    onNewClient(content) {
        this.clientRequest = new Client();
        this.modalRef = this.modalService.show(content);
    }

    onSave(event) {
        // if (event.id === null) {
        //     this.firebaseservice.addClient(event);
        // } else {
        //     this.firebaseservice.updateClient(event);
        // }
        this.modalRef.hide();
    }

    delete(event) {
        // this.firebaseservice.deleteClient(event);
    }

    onEdit(event, content) {
        this.clientRequest = event;
        this.modalRef = this.modalService.show(content);
    }

}
