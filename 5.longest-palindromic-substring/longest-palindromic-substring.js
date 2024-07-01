/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) return "";

  const t = "$" + s.split("").join("$") + "$";
  const n = t.length;
  const p = Array(n).fill(0);
  let center = 0;
  let right = 0;

  let maxLength = 0;
  let maxCenter = 0;

  for (let i = 0; i < n; i++) {
    const mirror = 2 * center - i;

    if (i < right) {
      p[i] = Math.min(right - i, p[mirror]);
    }

    while (
      i + p[i] + 1 < n &&
      i - p[i] - 1 >= 0 &&
      t[i + p[i] + 1] === t[i - p[i] - 1]
    ) {
      p[i]++;
    }

    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }

    if (p[i] > maxLength) {
      maxLength = p[i];
      maxCenter = i;
    }
  }

  const start = Math.floor((maxCenter - maxLength) / 2);
  return s.substring(start, start + maxLength);
};
