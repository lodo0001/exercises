"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

let locale = "da";
texts[locale].texts.forEach((elm) => {
  document.querySelector(elm.location).textContent = elm.text;
});

// Js til dropdown
const dropdown = document.querySelector("#dropdown");
dropdown.addEventListener("change", changeLanguage);

function changeLanguage() {
  if (dropdown.value === "de") {
    let locale = "de";
    texts[locale].texts.forEach((elm) => {
      document.querySelector(elm.location).textContent = elm.text;
    });
  } else {
    let locale = "da";
    texts[locale].texts.forEach((elm) => {
      document.querySelector(elm.location).textContent = elm.text;
    });
  }
}
