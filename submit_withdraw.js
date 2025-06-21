/* ✉️ User Submits Withdraw */

let wallet = User.getProperty("doge_wallet");
let amount = parseFloat(message);
let min_withdraw = 10;

let res = Libs.ResourcesLib.userRes("taskEarnings");

if (!wallet) return Bot.sendMessage("⚠️ Please set your Dogecoin wallet first.");
if (res.value() < amount || amount < min_withdraw) {
  return Bot.sendMessage(`❌ Minimum withdraw is ${min_withdraw} DOGE.\nYour balance: ${res.value().toFixed(2)}`);
}

// Save request
let history = Bot.getProperty("withdraw_requests", []);
if (!history) history = [];

history.push({
  user_id: user.telegramid,
  amount: amount,
  wallet: wallet,
  status: "Processing",
  date: new Date().toLocaleString()
});

Bot.setProperty("withdraw_requests", history, "json");
res.remove(amount);

Bot.sendMessage("✅ Your withdraw request has been submitted and is under review.\n⏳ Status: Processing");
