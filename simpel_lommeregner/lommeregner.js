document.getElementById("beregn").addEventListener("click", lommeregner);

function lommeregner() {
  const tal1 = Number(document.getElementById("input1").value);
  const tal2 = Number(document.getElementById("input2").value);
  const regneart = document.getElementById("regneart").value;

  let result;

  if (regneart === "+") {
    result = tal1 + tal2;
  } else if (regneart === "-") {
    result = tal1 - tal2;
  } else if (regneart === "*") {
    result = tal1 * tal2;
  } else if (regneart === "/") {
    result = tal1 / tal2;
  }

  document.getElementById("resultatInput").value = result;
}
