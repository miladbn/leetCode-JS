function rotateTheBox(box: string[][]): string[][] {
  const m = box.length;
  const n = box[0].length;

  const getGravity = (row: string[]): string[] => {
    const segments = row.join("").split("*");
    for (let i = 0; i < segments.length; i++) {
      const temp = segments[i].split("");
      let cntHash = 0;
      let cntDot = 0;

      for (let cell of temp) {
        if (cell === "#") {
          cntHash++;
        } else if (cell === ".") {
          cntDot++;
        }
      }

      const res = ".".repeat(cntDot) + "#".repeat(cntHash);
      segments[i] = res;
    }
    return segments.join("*").split("");
  };

  const rotatedBox: string[][] = Array.from({ length: n }, () =>
    Array(m).fill(".")
  );

  for (let i = 0; i < box.length; i++) {
    box[i] = getGravity(box[i]);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rotatedBox[j][m - i - 1] = box[i][j];
    }
  }

  return rotatedBox;
}
