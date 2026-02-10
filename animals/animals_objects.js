"use strict";

window.addEventListener("DOMContentLoaded", start);

// Opgave beskrivelse: Create an object prototype - name it Animal.
const Animal = {
  name: "-default name-",
  desc: "-no description-",
  type: "-unknown-",
  age: 0,
};

const allAnimals = [
  //   {
  //     name: "Mandu",
  //     desc: "amazing",
  //     type: "cat",
  //     age: 10,
  //   },
  //   {
  //     name: "Mia",
  //     desc: "black",
  //     type: "cat",
  //     age: 10,
  //   },
  //   {
  //     name: "Leeloo",
  //     desc: "growing",
  //     type: "dog",
  //     age: 3,
  //   },
  //   {
  //     name: "Toothless",
  //     desc: "trained",
  //     type: "dragon",
  //     age: 14,
  //   },
  //   {
  //     name: "ScoobyDoo",
  //     desc: "wondering",
  //     type: "dog",
  //     age: 58,
  //   },
  //   {
  //     name: "Horsey",
  //     desc: "horsing",
  //     type: "horse",
  //     age: 10,
  //   },
];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

// Opgave beskrivelse: In the prepareObjects function's forEach:
// Create a new object (named animal) from the Animal prototype
// Find the values for name, desc, and type from the jsonObject (it is recommended to create temporary variables for them)
// Set the properties in the new object to those values
// Add the new object to the array of animals
function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    // Her har vi lavet en ny objekt
    const animal = Object.create(Animal);

    // Her henter vi data fra json objekt
    const fullname = jsonObject.fullname;

    const firstSpace = fullname.indexOf(" ");
    const secondSpace = fullname.indexOf(" ", firstSpace + 1);
    const lastSpace = fullname.lastIndexOf(" ");

    const name = fullname.substring(0, firstSpace);
    const desc = fullname.substring(secondSpace + 1, lastSpace);
    const type = fullname.substring(lastSpace + 1);

    // console.log(`name: _${name}_
    //     desc: _${desc}_
    //     type: _${type}_`);

    // Her sætter vi vores nye data ind i en ny objekt
    animal.name = name;
    animal.desc = desc;
    animal.type = type;

    // Da age allerede er defineret i json filen, kan vi nøjes med at skrive nedenstående.
    animal.age = jsonObject.age;

    // Vi tilføjer objektet til det globale array
    allAnimals.push(animal);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
