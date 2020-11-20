/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-19 22:56:51
 * @LastEditTime: 2020-11-20 13:54:54
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/guandao/guandao.component.ts
 * @LICENSE: Apache-2.0
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guandao',
  templateUrl: './guandao.component.html',
  styleUrls: ['./guandao.component.css']
})
export class GuandaoComponent implements OnInit {

  date = new Date()

  number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
