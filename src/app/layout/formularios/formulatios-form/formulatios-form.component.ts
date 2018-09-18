import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-formulatios-form',
    templateUrl: './formulatios-form.component.html',
    styleUrls: ['./formulatios-form.component.scss']
})
export class FormulatiosFormComponent implements OnInit {
    @ViewChild('json') jsonElement?: ElementRef;
    public form: Object = {
        components: []
    };

    constructor() {
    }

    ngOnInit() {
    }


    onChange(event) {
        this.jsonElement.nativeElement.innerHTML = '';
        this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    }

}
