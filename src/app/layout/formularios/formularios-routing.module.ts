import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormulariosComponent} from './formularios.component';
import {FormulatiosFormComponent} from './formulatios-form/formulatios-form.component';
import {FormularioContainerComponent} from './formulario-container/formulario-container.component';

const routes: Routes = [
    {
        path: '',
        component: FormulariosComponent
    },
    {
        path: 'new',
        component: FormulatiosFormComponent
    },
    {
        path: 'container/:id',
        component: FormularioContainerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormulariosRoutingModule {
}
