//
let now = new Date();
let date1 = new Date("2022 02 May");
let date2 = new Date(2023, 5, 30, 6, 46, 36);

class Man {
  constructor(y, m, d) {
    this.year = y;
    this.month = m;
    this.day = d;
  }
}
const newMan = new Man(2025, 4, 4);
console.log(newMan);

date2.setFullYear(2033);
console.log(date2);

function add(a, b) {
  return a + b;
}
function Minus(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}
function Divide(a, b) {
  if (b === 0) {
    return "تقسیم بر صفر امکان پذیر نیست";
  }
  return a / b;
}
function Operator(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  }
  if (operator === "-") {
    return Minus(a, b);
  }
  if (operator === "/") {
    return Divide(a, b);
  }
  if (operator === "*") {
    return Multiply(a, b);
  }
}
// let num1 = parseFloat(prompt("Enter Number 1: "));
// let num2 = parseFloat(prompt("Enter Number 2: "));
// let opeartPerson = prompt("Chikaresh Konam?");

// window.onload = function () {
//   let showCalc = document.getElementById("Calculator");
//   showCalc.value = resault;
// };
// let resault = Operator(num1, num2, opeartPerson);
// alert(`Resault= ${resault}`);

////////////////

const users = [
  { id: 1, username: "ali", age: 25 },
  { id: 2, username: "sara", age: 22 },
  { id: 3, username: "mohammad", age: 30 },
];
const numbers = [10, 2, 3, 1, 5, 1, 4, 99];
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
function isCherries(fruit) {
  return fruit.name === "bananas";
}
console.log(inventory.find(isCherries));
