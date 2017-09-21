import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital',
   pure: false
})
export class CapitalPipe implements PipeTransform {

  transform(value: string): string {
    let fStr:string='';
    let restStr:string='';
    let newStr:string='';
    if (value.length !== 0) {
      fStr= value.charAt(0);
      restStr=value.slice(1);
      newStr=fStr.toUpperCase()+restStr;
  };
return newStr;
}
}