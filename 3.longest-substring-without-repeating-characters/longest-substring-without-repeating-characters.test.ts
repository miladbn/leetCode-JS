// lengthOfLongestSubstring.test.ts

import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";

describe("lengthOfLongestSubstring", () => {
  test("returns 0 for an empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  test("returns the length of the string when all characters are unique", () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
  });

  test("returns 1 for a string with all identical characters", () => {
    expect(lengthOfLongestSubstring("aaaaaa")).toBe(1);
  });

  test("returns the length of the longest substring without repeating characters", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring("aab")).toBe(2);
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });
});
