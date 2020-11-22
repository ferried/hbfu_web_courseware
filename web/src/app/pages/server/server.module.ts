import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table/table.component';
import {ServerRoutingModule} from './server-routing.module';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule} from '@angular/forms';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {HttpClientModule} from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RateComponent } from './rate/rate.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [TableComponent, RateComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzCardModule,
    NzButtonModule,
    HttpClientModule,
    NzRateModule,
    NzTableModule,
    NzIconModule,
    FormsModule,
    NzListModule,
    NzModalModule,
    ServerRoutingModule
  ],
  exports: [TableComponent]
})
export class ServerModule {
}
