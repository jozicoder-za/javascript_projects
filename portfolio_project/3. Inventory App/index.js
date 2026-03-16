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
}
