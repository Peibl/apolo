import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../../../shared/services/firebase.service';
import {Client} from '../../../../models/client';

@Component({
    selector: 'app-new-client-form',
    templateUrl: './new-client-form.component.html',
    styleUrls: ['./new-client-form.component.scss']
})
export class NewClientFormComponent implements OnInit {
    form: FormGroup;
    labelClass = 'col-sm-3 control-label';
    inputClass = 'col-sm-9';
    @Input() client: Client;
    @Output() onSave = new EventEmitter<any>();

    constructor(public formBuilder: FormBuilder, public firebaseservice: FirebaseService) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [this.client.name, [Validators.required]],
            lastname: [this.client.lastname, [Validators.required]],
            phone: [this.client.phone, [Validators.required]],
            phone2: [this.client.phone2, [Validators.required]],
            email: [this.client.email, [Validators.required, Validators.email]],
            address: [this.client.address, [Validators.required]],
            id: [this.client.id, []],
        });
    }

    save() {
        this.onSave.emit(this.form.value);
    }


}
