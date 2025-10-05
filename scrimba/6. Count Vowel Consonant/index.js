function countVowelConsonant(str) {
  const vowels = ["a", "e", "i", "o", "e"];
  const chars = str.split("");
  const total = chars.reduce((acc, char) => {
    if (vowels.includes(char)) {
      return acc + 1;
    }
  }, 0);
  return total;
}
