import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CountryCodeToNameInEngPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'countryCodeToNameInEng',
})
export class CountryCodeToNameInEngPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */


  private CountryName: Object = {
    "TH": "Thailand",
    "US": "United States of America",
    "UK": "England"
  }

  transform(value: string, ...args) {

    if (this.CountryName[value]) {
      return this.CountryName[value];
    } else {
      return "";
    }
  }
}
