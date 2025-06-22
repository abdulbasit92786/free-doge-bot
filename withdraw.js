// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyACjHqz0QKAH2OnSpomh3OioYUW1qfmd6w",
  authDomain: "freedogeclam.firebaseapp.com",
  databaseURL: "https://freedogeclam-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "freedogeclam",
  storageBucket: "freedogeclam.appspot.com",
  messagingSenderId: "764273012962",
  appId: "1:764273012962:web:398a856b5b7c37c4396ebb",
  measurementId: "G-MC0HWPRTNT"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const userId = new URLSearchParams(window.location.search).get("user"); // telegramId

function fetchBalance() {
  db.ref("users/" + userId).once("value", (snap) => {
    const data = snap.val();
    if (data && data.balance) {
      document.getElementById("balance").innerText = "Balance: " + data.balance + " DOGE";
    } else {
      document.getElementById("balance").innerText = "Balance: 0 DOGE";
    }
  });
}

function requestWithdraw() {
  const wallet = document.getElementById("wallet").value.trim();
  if (!wallet || wallet.length < 10) {
    alert("Please enter a valid DOGE wallet address.");
    return;
  }

  db.ref("users/" + userId).once("value", (snap) => {
    const userData = snap.val();
    const balance = userData?.balance || 0;

    if (balance < 50) {
      alert("Minimum withdraw is 50 DOGE.");
      return;
    }

    const now = new Date().toISOString();
    const withdrawData = {
      wallet,
      amount: balance,
      date: now,
      status: "Pending"
    };

    db.ref("withdraws/" + userId + "_" + Date.now()).set(withdrawData);
    db.ref("users/" + userId + "/balance").set(0); // reset balance

    alert("Withdraw request submitted!");

    // Send Telegram alert to admin
    const adminID = "7584161210";
    const botToken = "7436258467:AAHOf0R4lMn21XrOrJGIt-L5IuYu3yR9phs";
    const msg = encodeURIComponent(
      `💸 New Withdraw Request\n👤 User: ${userId}\n💰 Amount: ${balance} DOGE\n💼 Wallet: ${wallet}\n⏰ ${now}`
    );

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${adminID}&text=${msg}`);
  });
}

function loadHistory() {
  const list = document.getElementById("historyList");
  db.ref("withdraws").orderByKey().once("value", (snapshot) => {
    list.innerHTML = "";
    snapshot.forEach((snap) => {
      const data = snap.val();
      if (snap.key.includes(userId)) {
        const item = document.createElement("li");
        item.textContent = `💰 ${data.amount} DOGE ➡ ${data.wallet} (${data.status}) on ${data.date}`;
        list.appendChild(item);
      }
    });
  });
}

window.onload = () => {
  fetchBalance();
  loadHistory();
};
