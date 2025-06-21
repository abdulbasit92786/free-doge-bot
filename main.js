// main.js
let counter = parseInt(localStorage.getItem("tapCount") || "0");
let taskEarnings = parseFloat(localStorage.getItem("taskEarnings") || "0");

document.getElementById("counter").innerText = counter;
document.getElementById("taskEarnings").innerText = taskEarnings.toFixed(2);

document.getElementById("doge").addEventListener("click", () => {
  counter++;
  localStorage.setItem("tapCount", counter);
  document.getElementById("counter").innerText = counter;
});
