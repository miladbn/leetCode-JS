/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      let str = [];
      while (stack[stack.length - 1] !== "(") {
        str.push(stack.pop());
      }
      stack.pop(); // remove '('
      stack = [...stack.concat(str)];
      continue;
    }
    stack.push(s[i]);
  }
  return stack.join("");
};
