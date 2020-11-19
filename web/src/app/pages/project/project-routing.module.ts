/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-19 22:51:47
 * @LastEditTime: 2020-11-19 23:03:13
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/project-routing.module.ts
 * @LICENSE: Apache-2.0
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuzitongxinComponent } from './fuzitongxin/fuzitongxin.component';
import { GuandaoComponent } from './guandao/guandao.component';
import { IndexComponent } from './index/index.component';
import { JiagouComponent } from './jiagou/jiagou.component';
import { ShuangxiangbangdingComponent } from './shuangxiangbangding/shuangxiangbangding.component';
import { ZhilingComponent } from './zhiling/zhiling.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'jiagou', component: JiagouComponent },
  { path: 'guandao', component: GuandaoComponent },
  { path: 'sxbd', component: ShuangxiangbangdingComponent },
  { path: 'zhiling', component: ZhilingComponent },
  { path: 'fuzitongxin', component: FuzitongxinComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
