import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ConvertPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {

  transform(value: string) {
    if (value != null) {
      value = value.replace(/^0+/, '')
      let count = value.length;
      let str = '';
      let c = false
      for (let i = 0; i < value.length; i++) {
        if (count > 7) {
          let more7 = count - 7;
          if (more7 % 6 == 1) {
            if (parseInt(value[i]) != 0) {
              c = true;
              if (parseInt(value[i]) == 2) {
                str += this.getPopi(value[i].toString())
              } else {
                if (parseInt(value[i]) != 1) {
                  str += this.getChar(value[i].toString())
                }
              }
              str += this.getPosition('2')
            }
          } else if (more7 % 6 == 2) {
            if (parseInt(value[i]) != 0) {
              c = true;
              str += this.getChar(value[i].toString())
              str += this.getPosition('3')
            }
          } else if (more7 % 6 == 3) {
            if (parseInt(value[i]) != 0) {
              c = true;
              str += this.getChar(value[i].toString())
              str += this.getPosition('4')
            }
          } else if (more7 % 6 == 4) {
            if (parseInt(value[i]) != 0) {
              c = true;
              str += this.getChar(value[i].toString())
              str += this.getPosition('5')
            }
          } else if (more7 % 6 == 5) {
            if (parseInt(value[i]) != 0) {
              c = true;
              str += this.getChar(value[i].toString())
              str += this.getPosition('6')
            }
          } else if (more7 % 6 == 0) {
            if (parseInt(value[i]) != 0) {
              c = true
              if ((value.length - 7) % 6 == 1) {
                if (parseInt(value[i]) == 1) {
                  str += this.getPopi(value[i].toString())
                } else {
                  str += this.getChar(value[i].toString())
                }
              } else {
                str += this.getChar(value[i].toString())
              }
            }

            if (c) {
              str += this.getPosition('7')
            }
          }

          count = count - 1;
        } else {
          if (count % 7 == 0) {
            console.log('58')
            if (parseInt(value[i]) != 0) {
              if (value.length > 7) {
                if (parseInt(value[i]) == 1) {
                  str += this.getPopi(value[i].toString())
                } else {
                  str += this.getChar(value[i].toString())
                }
              } else {
                console.log('66')

                str += this.getChar(value[i].toString())
              }
            }
            str += this.getPosition('7')
          } else if (count % 7 == 1) {
            if (parseInt(value[i]) != 0) {
              if (value.length > 1) {
                if (parseInt(value[i]) == 1) {
                  str += this.getPopi(value[i].toString())
                } else {
                  str += this.getChar(value[i].toString())
                }
              } else {
                str += this.getChar(value[i].toString())
              }
            }
          } else if (count % 7 == 2) {
            if (parseInt(value[i]) != 0) {
              if (parseInt(value[i]) == 2) {
                str += this.getPopi(value[i].toString())
              } else {
                if (parseInt(value[i]) != 1) {
                  str += this.getChar(value[i].toString())
                }
              }
              str += this.getPosition('2')
            }
          } else if (count % 7 == 3) {
            if (parseInt(value[i]) != 0) {
              str += this.getChar(value[i].toString())
              str += this.getPosition('3')
            }
          } else if (count % 7 == 4) {
            if (parseInt(value[i]) != 0) {
              str += this.getChar(value[i].toString())
              str += this.getPosition('4')
            }
          } else if (count % 7 == 5) {
            if (parseInt(value[i]) != 0) {
              str += this.getChar(value[i].toString())
              str += this.getPosition('5')
            }
          } else if (count % 7 == 6) {
            if (parseInt(value[i]) != 0) {
              str += this.getChar(value[i].toString())
              str += this.getPosition('6')
            }
          }

          count = count - 1;
        }
      }

      return str;
    }
  }

  getChar(char: string) {
    switch (char) {
      case '9': return 'เก้า';
      case '8': return 'แปด';
      case '7': return 'เจ็ด';
      case '6': return 'หก';
      case '5': return 'ห้า';
      case '4': return 'สี่';
      case '3': return 'สาม';
      case '2': return 'สอง';
      case '1': return 'หนึ่ง';
      default: return '';
    }
  }

  getPosition(num: string) {
    switch (num) {
      case '7': return 'ล้าน';
      case '6': return 'แสน';
      case '5': return 'หมื่น';
      case '4': return 'พัน';
      case '3': return 'ร้อย';
      case '2': return 'สิบ';
    }
  }

  getPopi(num: string) {
    switch (num) {
      case '2': return 'ยี่';
      case '1': return 'เอ็ด';
      default: return ''
    }
  }
}
