function chunkyMonkey(value, size) {
  const nested = [];
  let count = 0;

  while (count < value.length) {
    nested.push(value.slice(count, (count += size)));
  }
  return nested;
}
