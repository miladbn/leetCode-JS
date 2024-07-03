export function twoSum(nums: number[], target: number): number[] {
  const mp: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in mp) {
      return [i, mp[diff]];
    }

    mp[nums[i]] = i;
  }

  return [];
}
