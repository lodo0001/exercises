"use strict";

// Vi henter elementer fra HTML og giver dem et navn
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");

// Vi opretter variabler der ikke har nogen værdi endnu
let userChoice;
let computerChoice;

// Når HTML’en er færdig med at indlæse, så kør funktionen init.
document.addEventListener("DOMContentLoaded", init);

// Vi kalder på knapperne
function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}

function rockClick() {
  // Vi nulstiller hver player
  player1.setAttribute("class", "player");
  player2.setAttribute("class", "player");
  userChoice = "rock";
  player1.classList.add("rock");
  computerChooses();
  // vi tilføjer hidden
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
}
function paperClick() {
  // Vi nulstiller hver player
  player1.setAttribute("class", "player");
  player2.setAttribute("class", "player");
  userChoice = "paper";
  player1.classList.add("paper");
  computerChooses();
  // vi tilføjer hidden
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
}
function scissorsClick() {
  // Vi nulstiller hver player
  player1.setAttribute("class", "player");
  player2.setAttribute("class", "player");
  userChoice = "scissors";
  player1.classList.add("scissors");
  computerChooses();
  // vi tilføjer hidden
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
}

// Vi koder så computeren kun har 3 muligheder
function computerChooses() {
  let randomPick = Math.floor(Math.random() * 3);
  if (randomPick === 0) {
    computerChoice = "rock";
    player2.classList.add("rock");
  } else if (randomPick === 1) {
    computerChoice = "paper";
    player2.classList.add("paper");
  } else {
    computerChoice = "scissors";
    player2.classList.add("scissors");
  }

  handshakeStart();
  gameResult();
}

// floor = vi vælger lige tal
// === betyder

// Vi tilføjer resultater, vi bruger timeout til at sørge for at resultatet kommer efter 2800millisek
function gameResult() {
  if (userChoice === computerChoice) {
    setTimeout(userDraw, 2800);
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    setTimeout(userWin, 2800);
  } else if (userChoice === "paper" && computerChoice === "rock") {
    setTimeout(userWin, 2800);
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    setTimeout(userWin, 2800);
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    setTimeout(userLose, 2800);
  } else if (computerChoice === "paper" && userChoice === "rock") {
    setTimeout(userLose, 2800);
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    setTimeout(userLose, 2800);
  }
}

// Vi gør resultaterne synlig ved at fjerne at de er hidden
function userWin() {
  win.classList.remove("hidden");
}
function userLose() {
  lose.classList.remove("hidden");
}
function userDraw() {
  draw.classList.remove("hidden");
}

// Vi tilføjer shake til hænderne
function handshakeStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", handshakeStop);
}

// Vi sørger for at at shake stopper
function handshakeStop() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");
}
