/* == Withdraw Admin Panel == */

let admin_id = 123456789;  // 🛑 یہاں اپنا Telegram ID لکھیں

if (user.telegramid != admin_id) {
  return Bot.sendMessage("🚫 You are not authorized to access admin panel.");
}

let history = Bot.getProperty("withdraw_requests", []);
if (!history || history.length === 0) {
  return Bot.sendMessage("📭 No withdraw requests found.");
}

let msg = "*📥 Pending Withdraw Requests:*\n\n";
let inlineKeyboard = [];

history.forEach((req, index) => {
  if (req.status === "Processing") {
    msg += `🔹 *ID:* ${index}\n👤 User: \`${req.user_id}\`\n💰 Amount: *${req.amount} DOGE*\n🏦 Wallet: \`${req.wallet}\`\n🕓 Date: ${req.date}\n\n`;

    inlineKeyboard.push([
      { text: `✅ Approve ${index}`, callback_data: `/approve_withdraw ${index}` },
      { text: `❌ Reject ${index}`, callback_data: `/reject_withdraw ${index}` }
    ]);
  }
});

Bot.sendInlineKeyboard(inlineKeyboard, msg, { parse_mode: "Markdown" });
