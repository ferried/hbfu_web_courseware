/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-19 22:57:47
 * @LastEditTime: 2020-11-20 13:59:46
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/fuzitongxin/fuzitongxin.component.ts
 * @LICENSE: Apache-2.0
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuzitongxin',
  templateUrl: './fuzitongxin.component.html',
  styleUrls: ['./fuzitongxin.component.css']
})
export class FuzitongxinComponent implements OnInit {

  fu_text = "父组件的值"



  constructor() { }

  ngOnInit(): void {
  }


  jieshou(text: string) {
    alert(text)
  }

}
