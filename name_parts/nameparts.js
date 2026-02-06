const fullName = "Peter Heronimous Lind";

const space1 = fullName.indexOf(" ");
const space2 = fullName.lastIndexOf(" ");

const firstName = fullName.substring(0, space1);
const middleName = fullName.substring(space1 + 1, space2);
const lastName = fullName.substring(space2 + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);
