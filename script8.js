const numbers = [-1, -100, 1, 3];
const sum = numbers.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 50);
console.log(Math.abs(sum));

console.log(sum2(52, 10, 8, 9, 4, 5, "s", 200, -8, 0, "324", "150"));

function sum2(...arg) {
  let array1 = [];
  for (let i in arg) {
    const item = arg[i];
    if (typeof item === "number" && !isNaN(item)) {
      array1.push(item);
    }
    if (typeof item === "string" && !isNaN(item)) {
      array1.push(Number(item));
    }
    //
  }
  let sum = array1
    .filter((a) => {
      return a > 10;
    })
    .reduce((x, y) => {
      return x + y;
    }, 0);
  return sum;
}
