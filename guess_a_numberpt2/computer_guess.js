"use strict";

// Vi henter elementer fra HTML og giver dem et navn
const start_btn = document.querySelector("#gameStart");
const low_btn = document.querySelector("#tooLow");
const high_btn = document.querySelector("#tooHigh");
const right_btn = document.querySelector("#rightAnswer");
const message = document.querySelector("#message");

let min = 1;
let max = 100;
let guess;
let attempts = 0;
const maxAttempts = 10;

document.addEventListener("DOMContentLoaded", init);

function init() {
  start_btn.addEventListener("click", startGame);
  low_btn.addEventListener("click", lowClick);
  high_btn.addEventListener("click", highClick);
  right_btn.addEventListener("click", rightClick);

  //  Vi fjerner 3 knapper så kun start knappen kan ses
  low_btn.classList.add("hidden");
  high_btn.classList.add("hidden");
  right_btn.classList.add("hidden");
}

function startGame() {
  min = 1;
  max = 100;
  attempts = 0;

  //   Vi gør de tre andre knapper synlige
  low_btn.classList.remove("hidden");
  high_btn.classList.remove("hidden");
  right_btn.classList.remove("hidden");
  computerGuess();
}

function computerGuess() {
  if (attempts >= maxAttempts) {
    message.textContent = "I used all my attempts :( You win!";
    return;
  }

  //   Noter til herunder:
  // Vi har skrevet variablerne min = 1 og max = 100. Det mest rationelle tal at gætte er 50,
  // derfor skriver vi divideret med 2, computeren gætter altså midten af min og max.
  guess = Math.floor((min + max) / 2);
  attempts++;
  message.textContent = `Is your number ${guess}? (Attempt ${attempts})`;
}

// Når brugeren klikker "Too low", betyder det at gættet var for lavt.
// Derfor ved computeren, at tallet må være større end det nuværende gæt.

// Vi sætter min til guess + 1, så vi udelukker alle tal der er for små.
// Hvis gættet var 50, bliver min nu 51.

// Computeren vælger midten af intervallet for at gætte så effektivt som muligt:
// (51 + 100) / 2 = 75
function lowClick() {
  min = guess + 1;
  computerGuess();
}

// Hvis gættet var for højt, sænker vi maksimum.
// Computeren gætter midten af det nye interval igen.
function highClick() {
  max = guess - 1;
  computerGuess();
}

function rightClick() {
  message.textContent = `I guessed it! Your number was ${guess}`;

  // Vi Skjuler knapperne igen
  low_btn.classList.add("hidden");
  high_btn.classList.add("hidden");
  right_btn.classList.add("hidden");
}
