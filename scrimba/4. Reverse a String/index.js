function reverseAString(str) {
  // Method 1
  return str.split("").reverse().join("");

  // Method 2
  let reverseStr = "";
  for (let i = str.length - 1; i > 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
