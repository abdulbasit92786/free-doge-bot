// Withdraw request فنکشن
function submitWithdrawRequest(wallet, amount) {
  let balance = parseFloat(localStorage.getItem("taskEarnings") || "0");
  if (!wallet || amount < 10) return; // 10 ڈوج کم از کم ویلیو

  balance -= amount;
  localStorage.setItem("taskEarnings", balance.toFixed(2));

  let history = JSON.parse(localStorage.getItem("withdrawHistory")) || [];
  history.push({
    wallet,
    amount,
    status: "Processing",
    date: new Date().toLocaleString()
  });
  localStorage.setItem("withdrawHistory", JSON.stringify(history));

  alert(`✅ Withdraw Requested: ${amount} DOGE\n📌 Status: Processing`);
}
