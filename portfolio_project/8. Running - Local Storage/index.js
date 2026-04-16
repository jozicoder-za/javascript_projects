//load saved runs
let runs = JSON.parse(localStorage.getItem("runs")) || [];

// Save runs
function saveData() {
  localStorage.setItem("runs", JSON.stringify(runs));
}
