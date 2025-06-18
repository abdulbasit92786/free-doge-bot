let balance = 0;

document.getElementById("dogeImage").addEventListener("click", function(){
  balance += 1;
  document.getElementById("balanceAmount").innerText = balance;
});

function openReferral(){
  Telegram.WebApp.openTelegramLink("https://t.me/share/url?url=https://t.me/basitpkrbot&text=Join%20Free%20Doge%20Now!");
}

function openWithdraw(){
  alert("Withdraw via task completion platforms.\nSoon you'll be able to withdraw using Cointiply/Timebucks.");
}

function openTasks(){
  window.location.href = "https://www.cointiply.com/";
}
