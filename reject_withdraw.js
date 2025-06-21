/* ❌ Reject Withdraw */

let index = parseInt(params);
let history = Bot.getProperty("withdraw_requests", []);
let req = history[index];

if (!req || req.status !== "Processing") {
  return Bot.sendMessage("❌ Invalid or already processed request.");
}

// ❌ Mark as rejected
req.status = "Rejected";
history[index] = req;
Bot.setProperty("withdraw_requests", history, "json");

// Refund user (optional):
let res = Libs.ResourcesLib.anotherUserRes("taskEarnings", req.user_id);
res.add(req.amount);

Bot.sendMessage(`❌ Withdraw Rejected for user ${req.user_id}. Refunded ${req.amount} DOGE.`);
Bot.sendMessageToChatWithId(req.user_id, `❌ Your withdraw of ${req.amount} DOGE has been *Rejected*. The amount has been refunded.`);
