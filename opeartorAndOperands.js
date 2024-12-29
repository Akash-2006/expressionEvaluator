const fetchOperands = (operandsGroups, operations, operators, char) => {
  if (operations.includes(char)) {
    operators.push(char);
    operandsGroups.push([]);
    return [operandsGroups, operators];
  }

  operandsGroups[operandsGroups.length - 1].push(char);
  return [operandsGroups, operators];
};

export const parseExpression = (operations) => {
  return function ([operandsGroups, operators], char) {
    return fetchOperands(operandsGroups, operations, operators, char);
  };
};
