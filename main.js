document.getElementById("withdrawForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const wallet = document.getElementById("wallet").value;
  const amount = document.getElementById("amount").value;

  if (!wallet || !amount) {
    alert("❌ Please fill in all fields.");
    return;
  }

  // Telegram WebApp interface
  const tg = window.Telegram.WebApp;

  // Sending data to Telegram bot
  tg.sendData(JSON.stringify({
    command: "withdraw_from_webapp",
    wallet: wallet,
    amount: amount
  }));

  // Notify user in WebApp
  tg.close(); // Close WebApp after sending data
});
