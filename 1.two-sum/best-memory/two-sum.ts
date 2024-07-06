/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number): number[] => {
  let op: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j && !op.includes(i)) {
        op.push(i);
        op.push(j);
      }
    }
  }

  return op;
};
