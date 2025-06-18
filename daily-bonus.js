// daily-bonus.js

function giveDailyBonus() {
    let lastClaim = localStorage.getItem("lastDailyBonus");
    let now = new Date().getTime();

    if (lastClaim && now - lastClaim < 86400000) {
        alert("⏳ Come back tomorrow for the next bonus!");
        return;
    }

    balance += 2;
    updateBalance();
    alert("🎁 You've received your 2 DOGE daily bonus!");
    localStorage.setItem("lastDailyBonus", now);
}
