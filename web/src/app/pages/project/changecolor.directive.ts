/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-20 00:23:58
 * @LastEditTime: 2020-11-20 00:26:30
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/changecolor.directive.ts
 * @LICENSE: Apache-2.0
 */
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private el: ElementRef) {
  }
  @Input() set color(condition: boolean) {

    if (condition) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }

}
