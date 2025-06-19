function submitWithdraw() {
  const address = document.getElementById("dogeAddress").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!address || !amount || isNaN(amount)) {
    document.getElementById("response").innerText = "Please enter valid address and amount.";
    return;
  }

  // Send the data to Telegram bot backend via WebApp
  Telegram.WebApp.sendData(JSON.stringify({
    type: "withdraw_request",
    wallet: address,
    amount: amount
  }));

  document.getElementById("response").innerText = "Withdrawal request submitted!";
}
