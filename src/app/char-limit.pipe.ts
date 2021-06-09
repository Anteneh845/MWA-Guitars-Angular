import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit'
})
export class CharLimitPipe implements PipeTransform {

  transform(value: String,limit:number, ...args: unknown[]): String {
    return value.slice(0,limit)
  }

}
