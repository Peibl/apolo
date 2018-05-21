import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Client} from '../../models/client';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
    clientCollection: AngularFirestoreCollection<Client>;
    clients: Observable<Client[]>;

    constructor(public afs: AngularFirestore) {
        // this.clients = this.afs.collection('clients').valueChanges();
        this.clients = this.afs.collection('clients').snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as Client;
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }

    getClients() {
        return this.clients;
    }

}

