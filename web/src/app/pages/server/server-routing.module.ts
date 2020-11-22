import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TableComponent} from './table/table.component';
import {RateComponent} from './rate/rate.component';

const routes: Routes = [
  {path: 'table', component: TableComponent},
  {path: 'rate', component: RateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule {
}

