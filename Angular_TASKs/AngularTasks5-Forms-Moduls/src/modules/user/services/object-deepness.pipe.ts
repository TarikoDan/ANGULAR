import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectDeepness'
})
export class ObjectDeepnessPipe implements PipeTransform {

  transform(value: object, ...levels: number[]): unknown {
    const res = {};
    let level: number = levels[0];
    const openObj = (obj) => {
      level--;
      if (level > -1) {
        console.log(level);
        for (const key in obj) {
          if (typeof obj[key] !== 'object') {
            res[key] = obj[key];
          } else {
            res[key] = openObj(obj[key]);
          }
        }
      }
    };
    openObj(value);
    console.log(res);
    return res;
  }

}
