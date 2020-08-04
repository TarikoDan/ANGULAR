import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayLevels'
})
export class ArrayLevelsPipe implements PipeTransform {

  transform(value: object, ...levels: number[]): object {
    const level: number = levels[0];
    const arr = [];
    const res = {};
    const aaa = (objj) => {
      for (const key in objj) {
        if (typeof objj[key] !== 'object') {
          res[key] = objj[key];
          delete objj[key];
        }else {
          arr.push(objj[key]);
        }
      }
    };
    arr.push({main: res}) ;
    return res;
  }

}
