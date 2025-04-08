const products = ["html", "css", "js"];
//
let reza = "Choghondar";

const array = [5, 2, -48, 5, 6, 0, -1, -45];
let adad = array.filter((value, i) => {
  return typeof value === `number`;
});
let sum = 0;

console.log(adad);

for (let index of array) {
  sum += index;
}
console.log(`Plus: ${Math.abs(Number(sum))}`);

let sum2 = 0;
array.forEach((x) => (sum2 += x));
console.log(sum2);

let sum3 = 0;
for (let index = 0; index < array.length; index++) {
  sum3 += array[index];
}
console.log(sum3);

let sum4 = 0;
for (let i in array) {
  sum4 += array[i];
}
console.log(sum4);

let sum5 = array.reduce(function (accumulator, currentVlaue) {
  return accumulator + currentVlaue;
});
console.log(sum5);

let sum6 = array.reduce((a, c) => {
  return a + c;
});
console.log(sum6);

const video2 = {
  title: "video",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
video2.showTags();

function sum33(...feri) {
  let summer = 0;
  for (let index of feri) summer += index;
  return summer;
}

console.log(sum33(5, 10, 15, 25));

console.log(sum33(5, 10));

const user = { name: "asghar", age: 32, location: { x: 10, y: 20 } };
let freeze = Object.freeze(user);

freeze.location.x = true;
freeze.name = "Eshag";
console.log(freeze);

//
function Person() {
  return { name: "ali", age: 29, isvisible: true };
}
let newPerson = Person();
let arr3 = [];
for (let index in newPerson) {
  console.log(arr3.push(newPerson[index]));
}
console.log(arr3);

//
function ObejctToArray(obj) {
  let arrays2 = [];
  for (let key in obj) arrays2.push(obj[key]);
  return arrays2;
}
console.log(ObejctToArray({ name: "Asghar,", age: 35 }));
//
//
function ArrayToObject(arr, key) {
  let obejct = {};
  if (Array.isArray(arr) === true) {
    for (let item of arr) {
      console.log(key(item));
      obejct[key(item)] = item;
    }
    return obejct;
  } else return `Siktir`;
}

console.log(
  ArrayToObject(
    [
      { name: "ali", age: 20, money: [50, 100, 1000] },
      { name: "Farhad", age: 30, money: [500, 2000, 300] },
    ],
    function (item) {
      let total = item.money.reduce((a, b) => {
        return a + b;
      }, 0);
      return total;
    }
  )
);
const money = [50, 1000, 15400, 52200];
let TotalY = 0;
for (let index in money) {
  TotalY += money[index];
}
console.log(TotalY);

console.log(
  money.reduce((a, b) => {
    return a + b;
  })
);

//{20:{name:"ali",age:20} ,30:{name:"farhad",age:30}}

//{ali:{name:"ali",age:20} ,farhad:{name:"farhad",age:30}}
