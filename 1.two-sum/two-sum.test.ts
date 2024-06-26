// twoSum.test.ts
import { twoSum } from "./twoSum";

describe("twoSum", () => {
  test("should return indices of the two numbers such that they add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
  });

  test("should return empty array if no pair is found", () => {
    expect(twoSum([1, 2, 3, 4], 8)).toEqual([]);
  });

  test("should return the first correct pair if multiple pairs are possible", () => {
    expect(twoSum([1, 2, 3, 4, 5, 6], 7)).toEqual(
      expect.arrayContaining([2, 3])
    );
  });

  test("should handle negative numbers correctly", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual(
      expect.arrayContaining([2, 4])
    );
  });

  test("should handle large input arrays", () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i);
    expect(twoSum(largeArray, 19998)).toEqual(
      expect.arrayContaining([9999, 9998])
    );
  });
});
