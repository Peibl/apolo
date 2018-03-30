import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {ClientsComponent} from './clients/clients.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
            {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
            {path: 'forms', loadChildren: './form/form.module#FormModule'},
            {path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule'},
            {path: 'grid', loadChildren: './grid/grid.module#GridModule'},
            {path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule'},
            {path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'},
            {path: 'clients', loadChildren: './clients/clients.module#ClientsModule'},
            // {path: 'clients', component: ClientsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
