let tapCount = 0;

function tapDoge() {
  tapCount++;
  document.getElementById("tapCount").innerText = "Taps: " + tapCount;
  localStorage.setItem("tapCount", tapCount);
}

function loadTapCount() {
  const savedTaps = localStorage.getItem("tapCount");
  if (savedTaps) {
    tapCount = parseInt(savedTaps);
    document.getElementById("tapCount").innerText = "Taps: " + tapCount;
  }
}

window.onload = loadTapCount;
