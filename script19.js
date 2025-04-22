const array = [1, 5, 6, 8, 10, 100, 4, 15, 3152, 415485, 89, "s", true];
console.log(array);

function RandomNumber() {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(Math.abs(Math.round(Math.random() * -100)));
  }
  return arr;
}
const RandomNum = RandomNumber();
console.log(RandomNum);
const sorting = RandomNum.sort((a, b) => {
  return a - b;
});
console.log(sorting);
const sumArr = RandomNum.reduce((a, b) => {
  let jam = a + b;
  return jam;
}, 0);
console.log(sumArr);

const greaterThanFifty = RandomNum.filter((a) => {
  return a >= 50;
});
console.log(greaterThanFifty);

const arrays = array.filter((a) => {
  if (typeof a === "number") {
    return a;
  }
});
console.log(arrays);

//
