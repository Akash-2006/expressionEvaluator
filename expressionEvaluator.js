import { parseExpression } from "./opeartorAndOperands.js";

import {
  add, difference, multiplication, division, modularDivision
} from "./operations.js";

const operationEvaluator = (operands, operatorsToPerform) => {
  let result = operands.shift();

  for (const operation of operatorsToPerform) {
    result = operations[operation](result, operands.shift());
  }

  return result;
};

const operations = {
  '+': add,
  '-': difference,
  '*': multiplication,
  '/': division,
  '%': modularDivision
};

const expression = prompt('enter expression');
const operatorsAndOperands = [...expression].reduce(parseExpression((Object.keys(operations))),
  [[[]], []]);
const operands = operatorsAndOperands[0].map((character) => +character.join(''));
console.log(operationEvaluator(operands, operatorsAndOperands[1]));