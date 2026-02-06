const name = "Peter";

const firstPart = name.substring(0, 2).toLowerCase();
const thirdLetter = name.substring(2, 3).toUpperCase();
const lastPart = name.substring(3, 5).toLowerCase();

const fullName = firstPart + thirdLetter + lastPart;
console.log(fullName);
