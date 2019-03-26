import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CountryNameToFlagImageFilePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'countryNameToFlagImageFile',
})
export class CountryNameToFlagImageFilePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

  private countryFlag: Object = {
    "Thailand": "flag-th.png",
    "United States of America": "flag-us.png",
    "England": "flag-uk.png"
  }

  transform(value: string, ...args) {
    if (this.countryFlag[value]) {
      return this.countryFlag[value];
    } else {
      return "";
    }
  }
}
