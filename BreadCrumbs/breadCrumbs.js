// Vi henter elementer fra html.
const list = document.querySelector("ul");
const btn = document.querySelector("#knap");

// Udleveret breadcrumb array, der har navnet bc
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Vi gør vores knap klikbar.
// Når man klikker på knappen, så kører funktionen generateBreadcrumbs()
btn.addEventListener("click", generateBreadcrumbs);

// Funktion der laver breadcrumb-listen.
function generateBreadcrumbs() {
  // Vi rydder alt indhold i <ul>
  list.innerHTML = "";

  // For hvert element i arrayet
  // item = hver vare i arrayet
  // index = viser hvilket property element vi er på i arrayet.
  bc.forEach((item, bcNum) => {
    // Opretter et li element
    const li = document.createElement("li");

    // if statement hvor der laves link for alle undtagen sidste.
    // index < bc.length - 1 = "så længe det ikke er det sidste element"
    if (bcNum < bc.length - 1) {
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.name;
      li.appendChild(a);
    }
    // Sidste element skal ikke være et link, så vi siger bare item.name
    else {
      li.textContent = item.name;
    }

    // Sæt li ind i ul
    list.appendChild(li);
  });
}
