import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CurrentcyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'currentcy',
})
export class CurrentcyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

  private Currentcy: Object = {
    "TH": "บาท THB",
    "US": "ดอลลาร์ USD",
    "UK": "ปอนด์ GBP"
  }
  transform(value: string, ...args) {
    if (this.Currentcy[value]) {
      return this.Currentcy[value];
    } else {
      return "";
    }
  }
}
