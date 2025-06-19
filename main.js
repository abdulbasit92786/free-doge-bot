let balance = 0;
let energy = 100;

function earnDoge() {
  if (energy > 0) {
    balance += 0.1;
    energy -= 1;
    document.getElementById("balance").innerText = balance.toFixed(1);
    document.getElementById("energy").innerText = energy;
  } else {
    alert("⚡ Out of energy! Come back later.");
  }
}

function openWithdraw() {
  window.location.href = "withdraw.html";
}

function openReferral() {
  window.location.href = "referral.html";
}
