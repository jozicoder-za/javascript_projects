const inventory = [];

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;
  const category = document.getElementById("category").value;

  if (!name || price <= 0 || stock < 0) {
    alert("Please enter valid product information.");
    return;
  }

  inventory.push([name, price, stock, category]);

  updateUI();
}

function updateUI() {
  let totalInventoryValue = 0;
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  for (const product of inventory) {
    totalInventoryValue += product.price * product.stock;
    const div = document.createElement("div");

    div.classList.add("product-item");

    if (product.stock < 10) {
      div.classList.add("low-stock");
    }

    div.textContent = `${product.name} | R${product.price} | Stock: ${product.stock} | ${product.category}`;
    productList.appendChild(div);
  }
  document.getElementById("totalProducts").textContent = inventory.length;
  document.getElementById("inventoryValue").textContent = totalInventoryValue;
}
