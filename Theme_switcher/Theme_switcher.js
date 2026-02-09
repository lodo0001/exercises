"use strict";

const dropdown = document.querySelector("#dropdown");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

dropdown.addEventListener("change", changeTheme);

function changeTheme() {
  if (dropdown.value === "hawaii") {
    header.dataset.theme = "hawaii";
    main.dataset.theme = "hawaii";
    footer.dataset.theme = "hawaii";
  } else if (dropdown.value === "dark") {
    header.dataset.theme = "dark";
    main.dataset.theme = "dark";
    footer.dataset.theme = "dark";
  } else {
    header.dataset.theme = "light";
    main.dataset.theme = "light";
    footer.dataset.theme = "light";
  }
}
