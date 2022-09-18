import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leftZeros'
})
export class LeftZerosPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 10){
      return `00${value}`
    }
    if (value < 100){
      return `0${value}`
    }

    return '000';
  }

}
