// main.js — Tap to Earn system

// Initialize tap count from localStorage (optional)
let taps = parseInt(localStorage.getItem("tapCount")) || 0;

// Display initial value
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("tapCount").innerText = taps;
});

// Handle Doge image tap
document.getElementById("doge").addEventListener("click", function () {
  taps += 1;
  document.getElementById("tapCount").innerText = taps;

  // Save to localStorage
  localStorage.setItem("tapCount", taps);
});
