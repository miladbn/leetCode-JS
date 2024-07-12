function maximumGain(s: string, x: number, y: number): number {
  let a = "a";
  let b = "b";

  if (x < y) {
    [x, y] = [y, x];
    [a, b] = [b, a];
  }

  let score = 0;
  let a_count = 0;
  let b_count = 0;
  for (let c of s) {
    if (c === a) {
      ++a_count;
    } else if (c === b) {
      if (a_count > 0) {
        --a_count;
        score += x;
      } else {
        ++b_count;
      }
    } else {
      score += Math.min(a_count, b_count) * y;
      a_count = 0;
      b_count = 0;
    }
  }
  score += Math.min(a_count, b_count) * y;
  return score;
}
