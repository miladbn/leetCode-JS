/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let replacements = 0;
  let max = -Infinity;
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      replacements++;
      while (replacements > k) {
        if (nums[j] === 0) replacements--;
        j++;
      }
    }

    max = Math.max(max, i - j + 1);
  }
  return max;
};
