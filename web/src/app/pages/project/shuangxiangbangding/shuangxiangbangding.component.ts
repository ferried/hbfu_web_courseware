/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-19 22:56:35
 * @LastEditTime: 2020-11-19 23:56:17
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/shuangxiangbangding/shuangxiangbangding.component.ts
 * @LICENSE: Apache-2.0
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shuangxiangbangding',
  templateUrl: './shuangxiangbangding.component.html',
  styleUrls: ['./shuangxiangbangding.component.css']
})
export class ShuangxiangbangdingComponent implements OnInit {
  searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.searchText);
  }

  change() {
    this.searchText = '我用js触发了绑定变化,从而促使页面变化';
  }

}
