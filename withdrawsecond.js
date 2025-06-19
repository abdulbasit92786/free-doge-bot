document.getElementById("withdraw-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const amount = document.getElementById("amount").value;
  const wallet = document.getElementById("wallet").value;

  // Send Telegram notification
  sendWithdrawRequest(username, amount, wallet);

  // Show confirmation to user
  document.getElementById("status-msg").innerText = "✅ Request Sent to Admin!";
});
