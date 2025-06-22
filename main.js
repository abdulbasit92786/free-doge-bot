let taps = parseInt(localStorage.getItem("taps")||"0");
let taskEarn = parseFloat(localStorage.getItem("taskEarnings")||"0");
let refEarn = parseFloat(localStorage.getItem("refEarnings")||"0");

document.getElementById("tapCount").innerText = taps;
document.getElementById("taskEarnings").innerText = taskEarn.toFixed(2);
document.getElementById("refEarnings").innerText = refEarn.toFixed(2);

document.getElementById("doge").addEventListener("click",()=>{
  taps++; localStorage.setItem("taps",taps);
  document.getElementById("tapCount").innerText = taps;
});
