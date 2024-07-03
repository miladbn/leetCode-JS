/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  op = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j && !op.includes(i)) {
        op.push(i);
        op.push(j);
      }
    }
  }
  return op;
};
