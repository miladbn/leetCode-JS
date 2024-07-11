/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      let leftIndex = arr.lastIndexOf("(");
      let deletedArr = arr.splice(leftIndex);
      deletedArr.shift();
      arr.push(...deletedArr.reverse());
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join("");
};
