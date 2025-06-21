let count = 0;
let earnings = parseFloat(localStorage.getItem("taskEarnings")||"0");
document.getElementById("counter").innerText = count;
document.getElementById("taskEarnings").innerText = earnings.toFixed(2);

document.getElementById("doge").onclick = function(){
  count++;
  document.getElementById("counter").innerText = count;
  if(count % 50 === 0){
    earnings += 1;
    localStorage.setItem("taskEarnings",earnings.toFixed(2));
    document.getElementById("taskEarnings").innerText = earnings.toFixed(2);
  }
};
