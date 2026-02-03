// Vi henter fra html
const list = document.querySelector("ul");

// Laver et arrray der hedder columnArray
const columnArray = [];

// Laver en set Interval der siger hvornår vores søjler skal komme.
setInterval(generateColums, 1000);

// Vi laver en function der hedder generateColums
function generateColums() {
  // Vi tager fat i array giver den push som betyder at vi tilføjer en værdi i slutningen. Laver math random som giver den en tilfældig værdi fra 1-100.
  columnArray.push(Math.floor(Math.random() * 100) + 1);
  list.innerHTML = "";

  //   For hvert element
  columnArray.forEach((height) => {
    const li = document.createElement("li");
    li.style.setProperty("--height", height);
    list.appendChild(li);
  });

  //   hvis der er flere end 20 søjler så fjern en værdi fra starten.
  if (columnArray.length >= 21) {
    list.firstChild.remove;
    columnArray.shift();
  }
}
