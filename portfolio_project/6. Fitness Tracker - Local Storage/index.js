let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

function saveData() {
  localStorage.setItem("workouts", JSON.stringify(workouts));
}
