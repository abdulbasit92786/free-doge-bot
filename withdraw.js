// withdraw.js
document.getElementById("withdrawForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const wallet = document.getElementById("wallet").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);

  let taskEarnings = parseFloat(localStorage.getItem("taskEarnings") || "0");
  if (!wallet || isNaN(amount)) {
    alert("❌ Please fill all fields.");
    return;
  }
  if (amount < 3) {
    alert("❌ Minimum withdrawal is 3 DOGE.");
    return;
  }
  if (amount > taskEarnings) {
    alert("❌ You don't have enough earned balance.");
    return;
  }

  // Deduct the amount
  taskEarnings -= amount;
  localStorage.setItem("taskEarnings", taskEarnings.toFixed(2));

  // Send data to Telegram bot (WebApp context)
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.sendData(JSON.stringify({
      command: "withdraw_request",
      wallet: wallet,
      amount: amount
    }));
    tg.close();
  } else {
    alert("✅ Withdraw requested! Admin will process soon.");
  }
});
