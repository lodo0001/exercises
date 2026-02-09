// Vores array
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Variabl hvor vi holder styr på om knappen er blevet klikket på, her sætter vi den til falsk, fordi knappen ikke er blevet klikket på endnu.
let hadTheButtonEverBeenClickedFlag = false;

// Vi henter elementer fra html - sætningen (p) og model (dialog):
const p = document.querySelector("p");
const dialog = document.querySelector("#dialog");

// Knappen med id "knap", når den klikkes, kales funktionen changeWords().
document.querySelector("#knap").addEventListener("click", changeWords);

// Functionen changeWords
function changeWords() {
  if (hadTheButtonEverBeenClickedFlag === true) {
    // console.log("Knappen har allerede været klikket på");
    dialog.showModal();
  } else {
    // console.log("Knappen har IKKE været klikket på endnu");
    // Vi gemmer sætningen (p) i variablen text
    let text = p.textContent;
    // Vi looper gennem alle elementer i curseWords.
    // replaceAll ersatter vores "dårlige" ord med vores gode ord.
    curseWords.forEach((word) => {
      text = text.replaceAll(word.bad, word.good);
    });

    // Opdater tekst i <p>
    p.textContent = text;
    // marker at vores knap nu er blevet klikket på.
    hadTheButtonEverBeenClickedFlag = true;
  }
}
