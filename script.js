/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const countClicks = document.getElementById("btn__element");
const displayClicks = document.getElementById("btn__state");
let count = 0;

countClicks.addEventListener("click", function (e) {
  e.preventDefault();
  count += 1;
  displayClicks.textContent = count;
});
