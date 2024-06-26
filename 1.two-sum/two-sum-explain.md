# TwoSum Function Explanation

This function `twoSum` finds two indices in the array `nums` such that the numbers at those indices add up to the given `target`. It returns these two indices as an array. Here’s a step-by-step explanation of how it works:

## Initialization

A map `mp` is created to store the indices of the elements as you iterate through the array. This map uses the array elements as keys and their indices as values.

## Iteration

- The function iterates through each element of the array `nums` using a `for` loop.
- For each element `nums[i]`, it calculates the difference `diff` between the target value and the current element (`diff = target - nums[i]`).

## Check for Complement

- It checks if `diff` is already a key in the map `mp`. If `diff` is found in `mp`, it means that there is a previous element in the array which, when added to the current element, equals the target. Therefore, the function returns the indices of these two elements as an array `[i, mp[diff]]`.

## Update Map

- If `diff` is not found in the map, it adds the current element `nums[i]` to the map with its index `i` as the value (`mp[nums[i]] = i`).

## Return Statement

- If no such pair is found after iterating through the entire array, the function returns an empty array `[]`.

## Complete Code

```typescript
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
