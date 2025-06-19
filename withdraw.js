// File: withdraw.js
document.getElementById("withdrawForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const wallet = document.getElementById("wallet").value;
  const amount = document.getElementById("amount").value;

  document.getElementById("withdrawMessage").innerText = `✅ Withdraw request of ${amount} DOGE sent to ${wallet}`;
});
