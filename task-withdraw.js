// add this inside submitWithdraw() function after validation
const withdrawData = {
  wallet: wallet,
  amount: amount,
  status: "Pending"
};

const allRequests = JSON.parse(localStorage.getItem("withdrawRequests") || "[]");
allRequests.push(withdrawData);
localStorage.setItem("withdrawRequests", JSON.stringify(allRequests));
