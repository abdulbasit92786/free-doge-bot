let balance = 0;
const counter = document.getElementById("counter");
const doge = document.getElementById("doge");

doge.addEventListener("click", () => {
  balance += 0.0005;
  counter.innerText = `💰 ${balance.toFixed(4)} DOGE`;
});
