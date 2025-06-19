const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN_HERE');

let withdraws = {}; // userId => [{wallet, amount, status}]
const ADMIN_ID = '123456789'; // 🛡️ Replace with your Telegram user ID

bot.on('web_app_data', (ctx) => {
  try {
    const data = JSON.parse(ctx.webAppData.data);
    const userId = ctx.from.id.toString();

    if (data.type === "withdraw_request") {
      const { wallet, amount } = data;

      const request = {
        wallet,
        amount,
        status: "Pending",
        timestamp: new Date().toISOString()
      };

      if (!withdraws[userId]) withdraws[userId] = [];
      withdraws[userId].push(request);

      ctx.reply("✅ Withdrawal request submitted for review!");

      // 🔔 Notify Admin
      bot.telegram.sendMessage(ADMIN_ID,
        `💰 *New Withdrawal Request*:\n\n👤 User: ${ctx.from.first_name} (${ctx.from.id})\n💸 Amount: ${amount} DOGE\n💼 Wallet: ${wallet}\n🕒 ${request.timestamp}`,
        Markup.inlineKeyboard([
          Markup.button.callback(`✅ Approve ${userId}`, `approve_${userId}_${withdraws[userId].length - 1}`),
          Markup.button.callback(`❌ Reject ${userId}`, `reject_${userId}_${withdraws[userId].length - 1}`)
        ])
      );

    } else if (data.type === "get_withdraw_history") {
      const history = withdraws[userId] || [];
      ctx.telegram.sendMessage(ctx.chat.id, JSON.stringify({
        type: "withdraw_history",
        list: history
      }));
    }

  } catch (e) {
    console.error("Error:", e);
    ctx.reply("❌ Error processing your request.");
  }
});

// ✅ Admin Approve / ❌ Reject Handler
bot.on('callback_query', (ctx) => {
  const data = ctx.callbackQuery.data;
  const adminId = ctx.from.id.toString();

  if (adminId !== ADMIN_ID) {
    return ctx.answerCbQuery("⛔ You are not allowed!");
  }

  const [action, userId, index] = data.split("_");

  if (!withdraws[userId] || !withdraws[userId][index]) {
    return ctx.answerCbQuery("❌ Request not found.");
  }

  const status = action === "approve" ? "✅ Approved" : "❌ Rejected";
  withdraws[userId][index].status = status;

  ctx.editMessageText(`✅ Admin ${status} withdrawal for user ${userId}`);

  // Notify user
  bot.telegram.sendMessage(userId, `📢 Your withdrawal request has been *${status}* by the admin.`);
});

bot.launch();
console.log("✅ Bot is running with admin approval system!");
