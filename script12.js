let baseSalary = 30000;
let overtrime = 10;
let rate = 20;

function getWage() {
  return baseSalary + overtrime * rate;
}
//
let employee = {
  baseSalary: 30000,
  overtrime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtrime * this.rate;
  },
};
//
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {
    "salam";
  };
  this.draw = function () {
    console.log("draw");
  };
}
const circle2 = new Circle(66);
console.log(circle2);

function Circle2() {
  this.computeOptimumLocation = () => {
    console.log(`object`);
  };
}
