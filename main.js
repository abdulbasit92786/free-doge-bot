// File: main.js
let counter = 0;

document.getElementById("doge").onclick = function () {
  counter += 1;
  document.getElementById("counter").innerText = counter;
}
