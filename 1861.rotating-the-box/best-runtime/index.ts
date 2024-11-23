const rotateTheBox = (box: string[][]): string[][] => {
  const m = box.length;
  const n = box[0].length;
  const rotatedBox: string[][] = Array.from({ length: n }, () =>
    Array(m).fill(".")
  );

  for (let i = 0; i < m; i++) {
    let currentIndex = n - 1;

    for (let j = n - 1; j >= 0; j--) {
      const val = box[i][j];

      if (val === ".") continue;
      if (val === "*") currentIndex = j;

      rotatedBox[currentIndex][m - 1 - i] = val;
      currentIndex--;
    }
  }

  return rotatedBox;
};
