import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable()
export class GenericService {
   private entityCollection: AngularFirestoreCollection<any>;
   private  entityDoc: AngularFirestoreDocument<any>;
   private path;

    constructor(public afs: AngularFirestore) {

    }

    init(path: string) {
        this.path = path;
        this.entityCollection = this.afs.collection(this.path);
    }

    getEntitys() {
        return this.entityCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }

    addEntity(entity: any) {
        this.entityCollection.add(entity);
    }

    deleteEntity(entity: any) {
        this.entityDoc = this.afs.doc(this.path + `/${entity.id}`);
        this.entityDoc.delete();
    }

    updateEntity(entity: any) {
        this.entityDoc = this.afs.doc(this.path + `/${entity.id}`);
        this.entityDoc.update(entity);
    }

}
