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

  workouts.push({ type, duration, calories });

  saveData();
  updateUI();
}

function updateUI() {
  let totalDuration = 0;
  let totalCalories = 0;
  let longest = 0;
  let longestType = "None";

  const list = document.getElementById("list");
  list.innerHTML = "";

  workouts.forEach((w) => {
    totalDuration += w.duration;
    totalCalories += w.calories;
  });
}
