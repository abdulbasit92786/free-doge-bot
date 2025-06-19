// file: task-withdraw.js

document.addEventListener("DOMContentLoaded", function () {
  const balance = localStorage.getItem("taskEarnings") || 0;
  document.getElementById("task-balance").innerText = parseFloat(balance).toFixed(2);
});

function submitWithdraw() {
  const wallet = document.getElementById("wallet").value.trim();
  const amount = parseFloat(document.getElementById("amount").value.trim());
  const currentBalance = parseFloat(localStorage.getItem("taskEarnings") || 0);
  const msg = document.getElementById("withdraw-msg");

  if (!wallet || isNaN(amount) || amount <= 0) {
    msg.innerText = "⚠️ Please fill all fields correctly.";
    return;
  }

  if (amount > currentBalance) {
    msg.innerText = "❌ You don't have enough balance!";
    return;
  }

  // Send request (or mock for now)
  msg.innerText = "✅ Withdrawal request sent for approval.";

  // Reset local balance
  localStorage.setItem("taskEarnings", (currentBalance - amount).toFixed(2));
  document.getElementById("task-balance").innerText = (currentBalance - amount).toFixed(2);

  // OPTIONAL: Send to Telegram bot via HTTP request or Telegram WebApp Data
}
