let tapCount = 0;
let taskEarnings = 0.0;

function handleTap() {
  tapCount += 1;
  document.getElementById('tapCount').innerText = tapCount;
}

// Show claim button only after video is watched
const video = document.getElementById("earnVideo");
const claimBtn = document.getElementById("claimBtn");

video.addEventListener("ended", () => {
  claimBtn.style.display = "block";
});

function claimTask() {
  taskEarnings += 0.5; // You can change this reward
  document.getElementById("taskEarnings").innerText = taskEarnings.toFixed(2);
  claimBtn.style.display = "none";
  alert("🎉 Reward Claimed Successfully!");
}
