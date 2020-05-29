let location1 = Math.floor(Math.random() * 5); // added automatic ship location
let location2 = location1 + 1;
let location3 = location2 + 1;

alert(location1);

let shot;
let hits = 0;
let shots = 0;

let isSunk = false;

while (isSunk == false) {
  shot = prompt("Ти готовий стріляти? (Веди цифру від 0 до 7");
  if (shot < 0 || shot > 7) {
    alert("Ееее, братішка, потрібно від 0 до 7");
  } else {
    shots = shots + 1;
    if (shot == location1 || shot == location2 || shot == location3) {
      alert("БА-БАХ!!! Ти попав)");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("Чотінько! Ти його завалив)");
      }
    } else {
      alert("Пічалька! Ти промахнувся(");
    }
  }
}
