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
showTheseVehicles(vehicles);

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
const egetAfJonas = vehicles.filter((vehicles) => {
  return vehicles.ownedBy === "Jonas" && vehicles.isElectric === true;
});

console.log("egetAfJonas", egetAfJonas);
// Som du kan se bruges der && til at tilføje flere værdier.
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
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}
