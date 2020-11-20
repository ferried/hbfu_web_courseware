/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-20 13:55:31
 * @LastEditTime: 2020-11-20 14:00:32
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/fuzitongxin/zizujian/zizujian.component.ts
 * @LICENSE: Apache-2.0
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-zizujian',
  templateUrl: './zizujian.component.html',
  styleUrls: ['./zizujian.component.css']
})
export class ZizujianComponent implements OnInit {

  @Input() text: string;

  @Output() event: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  dianji() {
    this.text = '子组件被点击了，我把text变成了这句话传递给了父组件'
    this.event.emit(this.text);
  }

}
