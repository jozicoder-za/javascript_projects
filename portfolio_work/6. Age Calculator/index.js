let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();
});

/* continue 12:36 */
