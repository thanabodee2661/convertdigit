import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {

  transform(value: string) {
    if (value != null) {
      value = value.replace(/^0+/, '')
      let v = value.split('.');
      let value1 = v[0];
      let value2;
      let count = value1.length;
      let count2;
      if (v[1]) {
        value2 = v[1];
        count2 = value2.length
      }
      let str = '';
      let c = false
      for (let i = 0; i < value1.length; i++) {
        if (count > 7) {
          let more7 = count - 7;
          if (more7 % 6 == 1) {
            if (parseInt(value1[i]) != 0) {
              c = true;
              if (parseInt(value1[i]) == 2) {
                str += this.getPopi(value1[i].toString())
              } else {
                if (parseInt(value1[i]) != 1) {
                  str += this.getChar(value1[i].toString())
                }
              }
              str += this.getPosition('2')
            }
          } else if (more7 % 6 == 2) {
            if (parseInt(value1[i]) != 0) {
              c = true;
              str += this.getChar(value1[i].toString())
              str += this.getPosition('3')
            }
          } else if (more7 % 6 == 3) {
            if (parseInt(value1[i]) != 0) {
              c = true;
              str += this.getChar(value1[i].toString())
              str += this.getPosition('4')
            }
          } else if (more7 % 6 == 4) {
            if (parseInt(value1[i]) != 0) {
              c = true;
              str += this.getChar(value1[i].toString())
              str += this.getPosition('5')
            }
          } else if (more7 % 6 == 5) {
            if (parseInt(value1[i]) != 0) {
              c = true;
              str += this.getChar(value1[i].toString())
              str += this.getPosition('6')
            }
          } else if (more7 % 6 == 0) {
            if (parseInt(value1[i]) != 0) {
              c = true
              if ((value1.length - 7) % 6 == 1) {
                if (parseInt(value1[i]) == 1) {
                  str += this.getPopi(value1[i].toString())
                } else {
                  str += this.getChar(value1[i].toString())
                }
              } else {
                str += this.getChar(value1[i].toString())
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
            if (parseInt(value1[i]) != 0) {
              if (value1.length > 7) {
                if (parseInt(value1[i]) == 1) {
                  str += this.getPopi(value1[i].toString())
                } else {
                  str += this.getChar(value1[i].toString())
                }
              } else {
                console.log('66')

                str += this.getChar(value1[i].toString())
              }
            }
            str += this.getPosition('7')
          } else if (count % 7 == 1) {
            if (parseInt(value1[i]) != 0) {
              if (value1.length > 1) {
                if (parseInt(value1[i]) == 1) {
                  str += this.getPopi(value1[i].toString())
                } else {
                  str += this.getChar(value1[i].toString())
                }
              } else {
                str += this.getChar(value1[i].toString())
              }
            }
          } else if (count % 7 == 2) {
            if (parseInt(value1[i]) != 0) {
              if (parseInt(value1[i]) == 2) {
                str += this.getPopi(value1[i].toString())
              } else {
                if (parseInt(value1[i]) != 1) {
                  str += this.getChar(value1[i].toString())
                }
              }
              str += this.getPosition('2')
            }
          } else if (count % 7 == 3) {
            if (parseInt(value1[i]) != 0) {
              str += this.getChar(value1[i].toString())
              str += this.getPosition('3')
            }
          } else if (count % 7 == 4) {
            if (parseInt(value1[i]) != 0) {
              str += this.getChar(value1[i].toString())
              str += this.getPosition('4')
            }
          } else if (count % 7 == 5) {
            if (parseInt(value1[i]) != 0) {
              str += this.getChar(value1[i].toString())
              str += this.getPosition('5')
            }
          } else if (count % 7 == 6) {
            if (parseInt(value1[i]) != 0) {
              str += this.getChar(value1[i].toString())
              str += this.getPosition('6')
            }
          }

          count = count - 1;
        }

        if (i + 1 == value1.length) {
          str += 'บาท'
          if (v[1]) {
            for (let j = 0; j < value2.length; j++) {
              if (count2 % 2 == 0) {
                if (parseInt(value2[j]) != 0) {
                  if (parseInt(value2[j]) == 2) {
                    str += this.getPopi(value2[j].toString())
                  } else {
                    if (parseInt(value2[i]) != 1) {
                      str += this.getChar(value2[j].toString())
                    }
                  }
                  str += this.getPosition('2')
                }

                count2 = count2 - 1;
              } else {
                if (parseInt(value2[j]) != 0) {
                  if (value2.length > 1) {
                    if (parseInt(value2[j]) == 1) {
                      str += this.getPopi(value2[j].toString())
                    } else {
                      str += this.getChar(value2[j].toString())
                    }
                  } else {
                    str += this.getChar(value2[j].toString())
                  }
                }

                count2 = count2 - 1;
              }

              if (j + 1 == value2.length) {
                str += 'สตางค์'
              }
            }
          }
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
