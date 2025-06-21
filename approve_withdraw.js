/* ✅ Approve Withdraw */

let index = parseInt(params);
let history = Bot.getProperty("withdraw_requests", []);
let req = history[index];

if (!req || req.status !== "Processing") {
  return Bot.sendMessage("❌ Invalid or already processed request.");
}

// ✅ Mark as completed
req.status = "Completed";
history[index] = req;
Bot.setProperty("withdraw_requests", history, "json");

Bot.sendMessage(`✅ Withdraw Approved for user ${req.user_id}:\n💰 ${req.amount} DOGE to \`${req.wallet}\``);
Bot.sendMessageToChatWithId(req.user_id, `✅ Your withdraw of ${req.amount} DOGE has been *Approved* and sent to \`${req.wallet}\``);
