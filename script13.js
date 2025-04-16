class Shape {
  constructor(input1, input2) {
    this.x = input1;
    this.y = input2;
  }
}
const shape1 = new Shape(5, 10);
console.log(shape1);

class Circles {
  constructor(input1, input2, input3) {
    this.x = new Shape(input1, input2);
    this.y = new Shape(input2, input3);
  }
}
const Circle22 = new Circles(20, 40, 60);
console.log(Circle22);

const myArray = [];
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(1356);
const circle2 = new Circle(1357);

console.log(circle);
console.log(circle2);

let array1 = [1];
let array2 = [2];

console.log(array1);
console.log(array2);

const person = { name: "Masoud" };
for (let key in person) {
  console.log([key]);
}
const sep = [1, 32, 3, 4, 7, 7, 1, 47, 5, 4, 4, 888, 88];
const jam = sep.forEach((Num, i) => {
  console.log(Num, i);
});

class Test {
  constructor(rad1, rad2) {
    this.x = rad1;
    this.y = rad2;
  }
}

const Circle222 = new Test(156,157);
console.log(Circle222);
