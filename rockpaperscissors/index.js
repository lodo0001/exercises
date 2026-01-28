"use strict";

// vi skal hente de tre knapper
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
// Brugeren vælger
let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init);

// javascript til brugerens valg
function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}
function rockClick() {
  console.log("ROCK!");
  userChoice = "rock";
  handshakeStart();
}
function paperClick() {
  console.log("PAPER!");
  userChoice = "paper";
  handshakeStart();
}
function scissorsClick() {
  console.log("SCISSORS!");
  userChoice = "scissors";
  handshakeStart();
}

// computeren vælger
function computerChooses() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);

  computerChoice = choices[random];

  console.log("Computer", computerChoice);
}

function handshakeStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  computerChooses();
  player1.addEventListener("animation", showResult, { once: true });
}
