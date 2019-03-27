import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  num: number;

  constructor(public navCtrl: NavController) {

  }

  validateNumber(event) {
    if (this.num) {
      if (event.keyCode != 8) {

        if (event.keyCode == 109) {
          event.preventDefault();
        }

        let value = event.target.value.split('.');
        if (value.length == 2) {
          if (value[1].length == 2) {
            event.preventDefault();
          } else {
            if (event.keyCode == 110) {
              event.preventDefault();
            }
          }
        } else {
          if (event.target.value.length > 0) {
            if (!(parseFloat(event.target.value) == event.target.value ? true : false)) {
              event.preventDefault();

            }
          }
        }
        console.log(value);

      }
    }
  }

}
