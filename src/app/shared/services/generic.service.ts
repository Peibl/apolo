import {Injectable} from '@angular/core';
// import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
// import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GenericService {
    // private entityCollection: AngularFirestoreCollection<any>;
    // private entityDoc: AngularFirestoreDocument<any>;
    private path;
    items: Observable<any[]>;

    constructor(public db: AngularFireDatabase) {
        // this.path = path;
        this.items = db.list('clients').valueChanges();
        console.log(this.items);
    }

    init(path: string) {
        this.path = path;

        // this.entityCollection = this.afs.collection(this.path);
    }

    getEntitys() {
        return this.items;
        // return new Observable();
        // return this.entityCollection.snapshotChanges().map(changes => {
        //     return changes.map(a => {
        //         const data = a.payload.doc.data();
        //         data.id = a.payload.doc.id;
        //         return data;
        //     });
        // });
        // return this.afs.collection('items').valueChanges();
    }

    addEntity(entity: any) {
        // this.entityCollection.add(entity);
    }

    deleteEntity(entity: any) {
        // this.entityDoc = this.afs.doc(this.path + `/${entity.id}`);
        // this.entityDoc.delete();

    }

    getEntityById(id: any) {
        // return this.entityCollection.doc(id).snapshotChanges().pipe(
        //     map(a => {
        //         const data = a.payload.data();
        //         // data.id = a.payload.id;
        //         return data;
        //     })
        // );
    }


    updateEntity(entity: any) {
        // this.entityDoc = this.afs.doc(this.path + `/${entity.id}`);
        // this.entityDoc.update(entity);
    }


}
