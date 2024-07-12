/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let a = "a";
  let b = "b";

  if (x < y) {
    [x, y] = [y, x];
    [a, b] = [b, a];
  }

  let score = 0;
  let a_count = 0;
  let b_count = 0;
  for (let c of s) {
    if (c === a) {
      ++a_count;
    } else if (c === b) {
      if (a_count > 0) {
        --a_count;
        score += x;
      } else {
        ++b_count;
      }
    } else {
      score += Math.min(a_count, b_count) * y;
      a_count = 0;
      b_count = 0;
    }
  }
  score += Math.min(a_count, b_count) * y;
  return score;
};
