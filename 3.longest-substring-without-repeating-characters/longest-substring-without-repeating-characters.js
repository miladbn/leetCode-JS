/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let res = 0;
  const map = new Map();

  for (let j = 0; j < s.length; j++) {
    const index = map.get(s[j]);
    if (index !== undefined && index >= i) {
      i = index + 1;
    }
    res = Math.max(res, j - i + 1);
    map.set(s[j], j);
  }

  return res;
};
