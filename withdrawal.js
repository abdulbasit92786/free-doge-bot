// withdrawal.js

function requestWithdrawal() {
    let address = prompt("Enter your Dogecoin wallet address:");
    let amount = parseFloat(prompt("Enter amount to withdraw (DOGE):"));

    if (!address || isNaN(amount)) {
        alert("Invalid input!");
        return;
    }

    if (amount > balance) {
        alert("❌ Not enough balance.");
        return;
    }

    // Simulate sending request
    alert("✅ Withdrawal request sent!\nAmount: " + amount + " DOGE\nTo: " + address);

    // Subtract from balance
    balance -= amount;
    updateBalance();
}
