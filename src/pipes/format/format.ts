import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if (value) {
      let arr = value.split('.')
      if (arr.length > 2) {
        return arr[0] + '.' + arr[1]
      }
    } else {
      return '';
    }

  }
}
