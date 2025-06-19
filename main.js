let tapCount = localStorage.getItem("tapCount") || 0;
document.getElementById("tapCount").textContent = tapCount;

document.getElementById("doge").onclick = function () {
  tapCount++;
  localStorage.setItem("tapCount", tapCount);
  document.getElementById("tapCount").textContent = tapCount;
};
