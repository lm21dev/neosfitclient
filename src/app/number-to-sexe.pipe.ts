import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'numberToSexe'
})
export class NumberToSexePipe implements PipeTransform {

  transform(value: string): string {
    let res: string;
    switch ( value ){
      case '1':
        res = 'Homme';
        break;
      case '2':
        res = 'Femme';
        break;
      default:
        res = 'Impossible';
        break;
    }
    return res;
  }

}
