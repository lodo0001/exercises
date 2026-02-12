"use strict";

const nextEpisode_btn = document.querySelector("#next_episode", next_episode);

let progress = 0;
const duration = 5000;
const stepTime = 50;

const interval = setInterval(() => {
  progress++;

  nextEpisode_btn.style.background = `linear-gradient(
    to right,
    white ${progress}%,
    #c2c3ce ${progress}%
    )`;

  if (progress >= 100) {
    clearInterval(interval);

    window.location.href = "next_episode.html";
  }
}, stepTime);

// Når man bevæger musen

document.addEventListener("mousemove", fillButton);

function fillButton() {
  clearInterval(Interval);
  nextEpisode_btn.style.background = "white";
}
