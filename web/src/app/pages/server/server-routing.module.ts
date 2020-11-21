import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TableComponent} from './table/table.component';

const routes: Routes = [
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule {
}
