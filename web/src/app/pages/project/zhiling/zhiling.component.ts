/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-19 22:56:43
 * @LastEditTime: 2020-11-20 14:07:14
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/zhiling/zhiling.component.ts
 * @LICENSE: Apache-2.0
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zhiling',
  templateUrl: './zhiling.component.html',
  styleUrls: ['./zhiling.component.css']
})
export class ZhilingComponent implements OnInit {

  data: Array<{ name: string, age: string }> = [
    { name: '我是小红', age: '我今年15岁了' },
    { name: '我是小橙', age: '我今年16岁了' },
    { name: '我是小黄', age: '我今年17岁了' },
    { name: '我是小绿', age: '我今年18岁了' },
    { name: '我是小青', age: '我今年19岁了' },
    { name: '我是小蓝', age: '我今年20岁了' },
    { name: '我是小紫', age: '我今年21岁了' },
  ];

  choosed = null;

  isVisible = false;

  color = false;

  textColor = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.textColor = true;
    }, 5000);
  }


  showModal() {
    this.isVisible = true;
  }

  handleCancel() {
    console.log('取消');
    this.isVisible = false;
  }
  handleOk() {
    console.log('确定');
    this.isVisible = false;
  }

  choose(d: { name: string, age: string }) {
    console.log(d);
    this.choosed = d;
  }

  changColor() {
    this.color = !this.color;
  }

}
