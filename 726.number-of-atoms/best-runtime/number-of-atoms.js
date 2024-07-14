/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let stack = [],
    curr = {},
    i = 0;

  function readNextDigit(i) {
    if (!formula[i]?.match(/[0-9]/)) return [1, i];
    let res = 0;
    while (formula[i]?.match(/[0-9]/)) {
      res = res * 10 + +formula[i++];
    }
    return [res, i];
  }

  function readNextElement(i) {
    if (!formula[i].match(/[A-Z]/)) return null;
    let res = formula[i++];
    while (formula[i]?.match(/[a-z]/)) {
      res += formula[i++];
    }
    return [res, i];
  }

  while (i < formula.length) {
    if (formula[i] === "(") {
      stack.push(curr);
      curr = {};
      i++;
    } else if (formula[i] === ")") {
      const [mult, newI] = readNextDigit(++i);
      i = newI;
      Object.keys(curr).forEach((key) => (curr[key] *= mult));
      const last = stack[stack.length - 1];
      Object.keys(last).forEach(
        (key) => (last[key] = last[key] + (curr[key] ?? 0))
      );
      Object.keys(curr).forEach((key) => {
        if (last[key] === undefined) {
          last[key] = curr[key];
        }
      });
      curr = stack.pop();
    } else {
      const [ele, newI] = readNextElement(i);
      i = newI;
      const [c, nI] = readNextDigit(i);
      i = nI;
      curr[ele] = (curr[ele] ?? 0) + c;
    }
  }

  return Object.entries(curr)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .reduce((r, [key, val]) => (r += `${key}${val === 1 ? "" : val}`), "");
};
