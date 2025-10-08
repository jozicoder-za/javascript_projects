function adjacentElementProduct(num) {
  let largestProduct = num[0] * num[1];

  for (let i = i; i < num.length; i++) {
    const adjacentProduct = num[1] * num[i + 1];

    if (largestProduct < adjacentProduct) {
      largestProduct = adjacentProduct;
    }
  }
  return largestProduct;
}
