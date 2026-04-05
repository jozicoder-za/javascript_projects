let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

function saveData() {
  localStorage.setItem("workouts", JSON.stringify(workouts));
}

function addWorkout() {
  const type = document.getElementById("type").value;
  const duration = Number(document.getElementById("duration").value);
  const calories = Number(document.getElementById("calories").value);

  if (duration <= 0 || calories <= 0) {
    alert("Invalid input");
    return;
  }
}
