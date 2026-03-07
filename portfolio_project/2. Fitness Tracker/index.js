const workouts = [];

// Work out function
function addWorkout() {
  const type = document.getElementById("type").value;
  const duration = Number(document.getElementById("duration").value);
  const calories = Number(document.getElementById("calories").value);

  if (duration <= 0 || calories <= 0) {
    alert("Please enter valid numbers");
    return;
  }

  workouts.push({
    type: type,
    duration: duration,
    caloriesBurned: calories,
  });

  updateUI();
}

function updateUI() {
  let totalDuration = 0;
  let totalCalories = 0;
  let longestDuration = 0;
  let longestWorkoutType = "None";

  const workoutList = document.getElementById("workoutList");
  workoutList.innerHTML = "";

  for (const workout of workouts) {
    longestDuration += workout.duration;
    totalCalories += workout.caloriesBurned;

    if (workout.duration > longestDuration) {
      longestDuration = workout.duration;
      longestWorkoutType = workout.type;
    }
  }
  document.getElementById("totalDuration").textContent = totalDuration;
  document.getElementById("totalCalories").textContent = totalCalories;
  document.getElementById("longestWorkout").textContent = longestWorkoutType;
}
