import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CountryCodeToNameInThaiPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'countryCodeToNameInThai',
})
export class CountryCodeToNameInThaiPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

  private CountryName: Object = {
    "TH": "ประเทศไทย",
    "US": "สหรัฐอเมริกา",
    "UK": "อังกฤษ"
  }

  transform(value: string, ...args) {
    if (this.CountryName[value]) {
      return this.CountryName[value];
    } else {
      return "";
    }
  }
}
