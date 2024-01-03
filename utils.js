"use strict";

const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  const numbers = [];
  // TODO: Are there weird edge cases when converting using Number?
  for(const strNum of strNums) {
    const num = Number(strNum);

    if(Number.isNaN(num)) {
      throw new BadRequestError(`${strNum} is not a valid number.`);
    }
    numbers.push(num);
  }
  return numbers;
}


module.exports = { convertStrNums };