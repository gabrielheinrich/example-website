const waveform = document.querySelector(".waveform");
const playerButton = document.querySelector(".player-button");

if (waveform) {
  const heights = [6, 24, 38, 18, 12, 31, 40, 22, 14, 33, 17, 26, 10, 37, 19, 29, 8, 24, 35, 16, 28, 12, 40, 22, 31, 14, 25, 9, 36, 18, 27, 11, 33, 20, 39, 15, 24, 8, 30, 18, 37, 12, 26, 40, 16, 32, 10, 23, 35, 14, 28, 8, 38, 20, 30, 13, 25, 9, 34, 18, 40, 12, 27, 16, 33, 10, 23, 37, 15, 29];
  for (const height of heights.slice(0, 60)) {
    const bar = document.createElement("span");
    bar.style.height = `${height}px`;
    waveform.append(bar);
  }
}

if (playerButton) {
  playerButton.addEventListener("click", () => {
    document.querySelector(".preview-note")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}
