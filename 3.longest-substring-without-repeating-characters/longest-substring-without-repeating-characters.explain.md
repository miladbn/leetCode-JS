# Explanation of `lengthOfLongestSubstring` Function

This code defines a function `lengthOfLongestSubstring` that finds the length of the longest substring without repeating characters in a given string `s`. Here is a step-by-step explanation of how it works:

## Initialization

1. `i` is initialized to `0`. It represents the starting index of the current substring being considered.
2. `res` is initialized to `0`. It will store the length of the longest substring found.
3. `map` is a `Map` object used to store the most recent index of each character encountered in the string.

## Loop through the string

- A `for` loop is used to iterate over the string `s` with `j` as the current index.

## Check for repeating characters

- For each character `s[j]`, the code checks if it has been seen before by looking it up in `map`.
- If the character `s[j]` is found in the `map` and its recorded index is greater than or equal to `i` (the start of the current substring), this means a repeating character is found within the current substring.
- In this case, update `i` to `index + 1` to move the start of the current substring to the right of the previous occurrence of the repeating character.

## Update the result

- Update `res` with the maximum value between the current `res` and the length of the current substring, which is `j - i + 1`.

## Record the current character's index

- Store the current index `j` of the character `s[j]` in `map`.

## Return the result

- After the loop ends, return `res`, which contains the length of the longest substring without repeating characters.

## Full Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0; // Start index of the current substring
  let res = 0; // Length of the longest substring found
  const map = new Map(); // Map to store the most recent index of each character

  for (let j = 0; j < s.length; j++) {
    const index = map.get(s[j]); // Get the most recent index of the character s[j]
    if (index !== undefined && index >= i) { // If the character is a repeat within the current substring
      i = index + 1; // Move the start index to the right of the previous occurrence
    }
    res = Math.max(res, j - i + 1); // Update the result with the length of the current substring
    map.set(s[j], j); // Update the character's most recent index
  }

  return res; // Return the length of the longest substring without repeating characters
};
```


# Key Points

- The `Map` ensures constant time complexity for checking if a character has been seen and updating its index.
- The two-pointer technique (`i` and `j`) efficiently finds the longest substring by dynamically adjusting the start index `i` as repeating characters are found.
- The `Math.max` function ensures that the maximum length of substrings found during the iteration is tracked and returned.
