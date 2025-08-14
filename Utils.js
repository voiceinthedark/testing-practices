// Utils.js
// @ts-check

class Utils{
  constructor(){

  }

  /**
   * @static
   * @method to capitalize the first letter of the input
   * @param {string} input 
   * */
  static capitalize(input){
   return input[0].toUpperCase() + input.slice(1) 

  }
  
}

export default Utils;
