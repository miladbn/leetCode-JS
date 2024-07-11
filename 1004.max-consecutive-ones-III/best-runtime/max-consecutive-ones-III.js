/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) k--;

    while (k < 0) {
      if (nums[left] === 0) k++;
      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};
