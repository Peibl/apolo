import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
    @Output() onSave = new EventEmitter<any>();

    constructor(public formBuilder: FormBuilder, public firebaseservice: FirebaseService) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            phone2: ['', [Validators.required]],
            email: ['', [Validators.required]],
            address: ['', [Validators.required]],
            id: [null, []],
        });
    }

    save() {
        const newClient: Client = {
            name: this.form.get('name').value,
            lastname: this.form.get('lastname').value,
            phone: this.form.get('phone').value,
            phone2: this.form.get('phone2').value,
            email: this.form.get('email').value,
            address: this.form.get('address').value,
            id: null
        };
        this.firebaseservice.addClient(newClient);
        this.onSave.emit();

    }


}
