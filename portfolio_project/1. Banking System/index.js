const account = {
  balance: 2600,
  transactions: [],
};

function updateUI() {
  document.getElementById("balance").textContent = account.balance;
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";

  account.transactions.forEach((transaction) => {
    const div = document.createElement("div");
    div.classList.add("transaction");
    div.textContent = `${transaction.type.toUpperCase()} - R${transaction.amount}`;
    transactionList.appendChild(div);
  });
}
