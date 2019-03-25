import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {FirebaseService} from './shared/services/firebase.service';
import {AngularFireModule} from 'angularfire2';
import {ReactiveFormsModule} from '@angular/forms';
import {FormioModule} from 'angular-formio';
import {TableModule} from 'primeng/table';
import {DropdownModule, MultiSelectModule} from 'primeng/primeng';
import {AngularFireDatabaseModule} from '@angular/fire/database';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const config = {
    apiKey: 'AIzaSyCj77Z_Fj_btuOsG32pIJAxvXTPRevufQ0',
    authDomain: 'apoli-a6de4.firebaseapp.com',
    databaseURL: 'https://apoli-a6de4.firebaseio.com',
    storageBucket: 'apoli-a6de4.appspot.com\'',
    messagingSenderId: '569193565235'
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        TableModule,
        DropdownModule,
        MultiSelectModule,
        FormioModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, FirebaseService],
    bootstrap: [AppComponent],
    exports: [ReactiveFormsModule, FormioModule, TableModule, DropdownModule, MultiSelectModule]
})
export class AppModule {
}
