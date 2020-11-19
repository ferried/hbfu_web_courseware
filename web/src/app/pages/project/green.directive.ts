/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-20 00:21:55
 * @LastEditTime: 2020-11-20 00:22:36
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/green.directive.ts
 * @LICENSE: Apache-2.0
 */
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective {


  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
  }


}
