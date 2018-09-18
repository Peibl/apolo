import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Client} from '../../models/client';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
    clientCollection: AngularFirestoreCollection<Client>;
    clients: Observable<Client[]>;
    clientDoc: AngularFirestoreDocument<Client>;

    constructor(public afs: AngularFirestore) {
        this.clientCollection = this.afs.collection('clients');
        this.clients = this.clientCollection.snapshotChanges().map(changes => {
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

    addClient(client: Client) {
        this.clientCollection.add(client);
    }

    deleteClient(client: Client) {
        this.clientDoc = this.afs.doc(`clients/${client.id}`);
        this.clientDoc.delete();
    }

    updateClient(client: Client) {
        this.clientDoc = this.afs.doc(`clients/${client.id}`);
        this.clientDoc.update(client);
    }

}

