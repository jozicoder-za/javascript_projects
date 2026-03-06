const workout = [];

// Work out function
function addWorkout() {
  const type = document.getElementById("type").value;
  const duration = Number(document.getElementById("duration").value);
  const calories = Number(document.getElementById("calories").value);

  if (duration <= 0 || calories <= 0) {
    alert("Please enter valid numbers");
    return;
  }
}
