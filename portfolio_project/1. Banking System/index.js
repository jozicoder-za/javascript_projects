const account = {
  balance: 2600,
  transactions: [],
};

function updateUI() {
  document.getElementById("balance").textContent = account.balance;
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";
}
