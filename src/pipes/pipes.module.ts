import { NgModule } from '@angular/core';
import { CountryNameToFlagImageFilePipe } from './country-name-to-flag-image-file/country-name-to-flag-image-file';
import { CountryCodeToNameInThaiPipe } from './country-code-to-name-in-thai/country-code-to-name-in-thai';
import { CountryCodeToNameInEngPipe } from './country-code-to-name-in-eng/country-code-to-name-in-eng';
import { CurrentcyPipe } from './currentcy/currentcy';
import { ConvertPipe } from './convert/convert';
@NgModule({
	declarations: [CountryNameToFlagImageFilePipe,
    CountryCodeToNameInThaiPipe,
    CountryCodeToNameInEngPipe,
    CurrentcyPipe,
    ConvertPipe],
	imports: [],
	exports: [CountryNameToFlagImageFilePipe,
    CountryCodeToNameInThaiPipe,
    CountryCodeToNameInEngPipe,
    CurrentcyPipe,
    ConvertPipe]
})
export class PipesModule {}
