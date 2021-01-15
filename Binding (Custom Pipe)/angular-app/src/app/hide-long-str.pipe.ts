import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideLongStr'
})
export class HideLongStrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    console.log(value,args)
    let returnStr=""
    if(value.length>20){
      returnStr = value.slice(0,21)
      returnStr=returnStr+"..."
    }
    return returnStr;
  }

}
