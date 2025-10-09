function avoidObstacles(num) {
  const largestNum = num.sort((a, b) => a - b)[num.length - 1];

  for (let i = 1; i <= largestNum + 1; i++) {
    if (num.every((value) => value % i !== 0)) {
      return i;
    }
  }
}
