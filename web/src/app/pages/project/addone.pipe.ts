/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-20 13:44:08
 * @LastEditTime: 2020-11-20 13:44:49
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /hbfu_web_courseware/web/src/app/pages/project/addone.pipe.ts
 * @LICENSE: Apache-2.0
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addone'
})
export class AddonePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value + args.reduce((i, j) => i + j);
  }

}
