const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
// showTheseVehicles(vehicles);

// function all(vehicles) {
//   return true;
// }
// function none(vehicles) {
//   return false;
// }
// console.log("ALL", vehicles.filter(all));
// console.log("NONE", vehicles.filter(none));

// KODE TIL ØVELSER
// 1.
// Kode til "en der viser alle el drevne fartøjer"
const isElectric = vehicles.filter((vehicles) => {
  return vehicles.isElectric === true;
});

console.log("isElectric", isElectric);

// En anden måde at gøre det.
const electricVeh = vehicles.filter((veh) => veh.isElectric);
console.log("isElectric", electricVeh);
// ______________________________________

// 2.
// Kode til "en der viser alle fartøjer med mere end 2 sæder"
function isPassengers(vehicles) {
  if (vehicles.passengers >= 2) {
    return true;
  } else {
    return false;
  }
}
// console.log(vehicles.filter(isPassengers));

const moreThanTwoPassengers = vehicles.filter(isPassengers);
console.log("moreThanTwoPassengers", moreThanTwoPassengers);
// ______________________________________

// 3.
// Kode til "alle el-drevne fartøjer ejet af Jonas"
const ejetAfJonas = vehicles.filter((vehicles) => {
  return vehicles.ownedBy === "Jonas" && vehicles.isElectric === true;
});

console.log("ejetAfJonas", ejetAfJonas);
// Som du kan se bruges der && til at tilføje flere værdier.

// En anden måde at gøre det.
const ejetafJonas = vechicles.filter(
  (veh) => veh.isElectric && veh.ownedBy === "Jonas"
);
console.log("EjetAfJonad", ejetAfJonas);
// ______________________________________

// 4.
// Kode til "alle rugbrøds drevne fartøjer med plads til mere end en"

const rugbrødAndMoreThanOnePerson = vehicles.filter((vehicles) => {
  return vehicles.fuel === "Rugbrød" && vehicles.passengers >= 1;
});

console.log("rugbrødAndMoreThanOnePerson", rugbrødAndMoreThanOnePerson);
// ______________________________________

// Kode til if statements
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    // console.log("each.stops", each.stops);
    // let stopsText;
    // if (each.stops) {
    //   console.log("DEN ER UNDEFINED");
    //   stopsText = each.stops;
    // } else {
    //   stopsText = "-";
    // }

    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops : "-"}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem ? "X" : "-"}</td>
</tr>`;
  });

  // ? og ?? er øvelser

  showTheseVehicles.undefined = "-";
  console.log(undefined, showTheseVehicles.undefined);
}

// ______________________________________
// Opgave 3, "Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)"

const el_btn = document.querySelector("#filter1");
const moreThan2_btn = document.querySelector("#filter2");
const jonas = document.querySelector("#filter3");
const ryebread = document.querySelector("#filter4");
const noFilter = document.querySelector("#filter5");

el_btn.addEventListener("click", () => showTheseVehicles(isElectric));
moreThan2_btn.addEventListener("click", () =>
  showTheseVehicles(moreThanTwoPassengers)
);
jonas.addEventListener("click", () => showTheseVehicles(egetAfJonas));
ryebread.addEventListener("click", () =>
  showTheseVehicles(rugbrødAndMoreThanOnePerson)
);
noFilter.addEventListener("click", () => showTheseVehicles(vehicles));
