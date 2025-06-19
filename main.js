let taps = 0;
let balance = 0;

function tapDoge() {
  taps++;
  balance += 1;
  document.getElementById("tap-count").innerText = taps;
  document.getElementById("balance").innerText = balance;
}

function showReferral() {
  document.getElementById("referral-section").classList.remove("hidden");
}

function showWithdraw() {
  document.getElementById("withdraw-section").classList.remove("hidden");
}

function closeModal() {
  document.querySelectorAll(".modal").forEach(modal => modal.classList.add("hidden"));
}
