var money = 0;
var income = 1;
var cost1 = 100;
var cost2 = 400;
var autoClickSpeed = 1;
var autoClickValue = 1;
window.onload = function() {
  document.cookie = "money=dinero";
  updateText();
}
 function clicker() {
  money = money + income;
 }
 function extraScooper() {
  if (money >= cost1) {
   income = income + 1;
   money = money - cost1;
   cost1 = cost1 * 1.2;
   cost1 = Math.round(cost1);
   }
   else {
    alert("You don't have enough money!");
   }
 }
 function iceCreamStand() {
 if (money >= cost2) {
  income = income + 5;
  money = money - cost2;
  cost2 = cost2 * 1.3;
  cost2 = Math.round(cost2);
  }
 else{
  alert("You don't have enough money!");
  }
 } 
 function autoClickInitiate() {
  setInterval(autoClick, 1000/autoClickSpeed);
 }
 function updateText() {
  document.getElementById("moneyAmount").innerHTML = "$" + money;
  document.getElementById("increase1").innerHTML = "Buy a scooper: $" + cost1 + " (+1 per click)";
  document.getElementById("increase2").innerHTML = "Buy an ice cream stand: $" + cost2 + " (+5 per click)";
  document.getElementById("incomeAmount").innerHTML = income;
 }
 function autoClick() {
  money = money + autoClickValue;
  updateText();
 }
function loadGame() {
  money = readCookie("money");
  updateText();
}
function alertCookies() {
  alert(document.cookie);
}