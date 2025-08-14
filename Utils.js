// Utils.js
// @ts-check

class Utils {
  constructor() {

  }

  /**
   * @static
   * @method to capitalize the first letter of the input
   * @param {string} input 
   * */
  static capitalize(input) {
    return input[0].toUpperCase() + input.slice(1)
  }

  /**
   * @static
   * @method to reverse a string 
   * @param {string} input 
   * */
  static reverseString(input) {
    return input.split('').reverse().join('')
  }

  /**
   * @static
   * @method to encrypt a message using caesar cipher
   * @param {string} input
   * @param {number} shift 
   * */
  static caesarCipher(input, shift) {
    let arr = input.split('')
    let pointa = 'a'.codePointAt(0)
    let pointz = 'z'.codePointAt(0)
    let pointA = 'A'.codePointAt(0)
    let pointZ = 'Z'.codePointAt(0)
    let res = []
    let upper = 65;
    let lower = 97;
    let c;

    for (let i = 0; i < arr.length; i++) {
      let codeP = arr[i].codePointAt(0)
      if (pointa && pointz && pointA && pointZ && codeP) {
          // case 2 lowercase
          if (codeP >= pointA && codeP <= pointZ) { //uppercase letters
            c = this.#shiftChars(codeP, shift, upper);
          } else if (codeP >= pointa && codeP <= pointz) {
            // lowercase letter
            c = this.#shiftChars(codeP, shift, lower)
          } else {
            c = arr[i];
          }
          res.push(c)
      }
    }
    return res.join('');
  }

  /**
   * @method helper to shift the characters
   * @param {number | undefined} code - character
   * @param {number} shift - rotation number
   * @param {number} start - the start of characters code 97 for a 65 for A 
   * */
  static #shiftChars(code, shift, start) {
    if(!code) return undefined
    return String.fromCodePoint((code + shift - start) % 26 + start)
  }

}

export default Utils;
