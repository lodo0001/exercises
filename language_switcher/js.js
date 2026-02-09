"use strict";

// Array med "dårlige" og "gode" ord
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Flag for om knappen er blevet klikket
let hadTheButtonEverBeenClickedFlag = false;

// Hent elementer
const textElm = document.querySelector(".text");
const button = document.querySelector("#knap");
const dialog = document.querySelector("#dialog");
const okBtn = document.querySelector("#ok_knap");

// Event listeners
button.addEventListener("click", changeWords);
okBtn.addEventListener("click", () => dialog.close());

// Funktionen der ændrer ordene
function changeWords() {
  if (hadTheButtonEverBeenClickedFlag === true) {
    // Hvis knappen allerede er klikket, vis dialog
    dialog.showModal();
  } else {
    // Første klik: erstat dårlige ord med gode
    let currentText = textElm.textContent;

    curseWords.forEach((word) => {
      currentText = currentText.replaceAll(word.bad, word.good);
    });

    textElm.textContent = currentText;

    // Sæt flag til true, så næste klik kun viser dialog
    hadTheButtonEverBeenClickedFlag = true;
  }
}
